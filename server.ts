/**
 * DMR Earthmoving Training Specialists (Zimbabwe)
 * DMR Machine Learning System - Full-Stack Express Server
 * 
 * Port: 3000 | Host: 0.0.0.0
 */

import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { DMR_MACHINES, DMRMachineConfig } from "./server/machines.js";
import { handleTutorQuery } from "./server/tutor.js";
import { aiRateLimiter } from "./server/rateLimiter.js";
import { analytics } from "./server/analytics.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logger
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      console.log(`[DMR API] ${req.method} ${req.path}`);
    }
    next();
  });

  // Health check
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({
      status: "ok",
      system: "DMR Machine Learning System",
      institution: "DMR Earthmoving Training Specialists (Zimbabwe)",
      fleetCount: Object.keys(DMR_MACHINES).length,
      timestamp: new Date().toISOString()
    });
  });

  // GET /api/machines - List all approved DMR machines (Public metadata only)
  app.get("/api/machines", (req: Request, res: Response) => {
    const publicList = Object.values(DMR_MACHINES).map((m: DMRMachineConfig) => ({
      id: m.id,
      name: m.name,
      shortName: m.shortName,
      type: m.type,
      assetNumber: m.assetNumber,
      qrUrl: m.qrUrl,
      description: m.description,
      serialRange: m.serialRange,
      trainingLevel: m.trainingLevel,
      modulesCount: m.modules.length,
      // PRIVATE vector store IDs and server documents are NOT returned
    }));
    res.json(publicList);
  });

  // GET /api/machines/:machineId - Detailed machine curriculum
  app.get("/api/machines/:machineId", (req: Request, res: Response) => {
    const { machineId } = req.params;
    const machine = DMR_MACHINES[machineId];

    if (!machine) {
      return res.status(404).json({
        error: "Machine learning environment not found",
        machineId,
        validMachines: Object.keys(DMR_MACHINES)
      });
    }

    // Return full curriculum, modules, quizzes (strip internal vector store keys)
    res.json({
      id: machine.id,
      name: machine.name,
      shortName: machine.shortName,
      type: machine.type,
      assetNumber: machine.assetNumber,
      qrUrl: machine.qrUrl,
      description: machine.description,
      serialRange: machine.serialRange,
      trainingLevel: machine.trainingLevel,
      modules: machine.modules.map(mod => ({
        id: mod.id,
        number: mod.number,
        title: mod.title,
        description: mod.description,
        estimatedMinutes: mod.estimatedMinutes,
        keyTopics: mod.keyTopics,
        inspectionItems: mod.inspectionItems || [],
        safetyWarnings: mod.safetyWarnings || [],
        lessonContent: mod.lessonContent,
        quizCount: mod.quiz.length,
        quiz: mod.quiz
      }))
    });
  });

  // POST /api/tutor - Topic-locked AI tutor endpoint
  app.post("/api/tutor", async (req: Request, res: Response) => {
    const { machineId, moduleId, question, history, mode } = req.body;

    // Rate Limiting check
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'client';
    const rateCheck = aiRateLimiter.checkLimit(clientIp);

    if (!rateCheck.allowed) {
      return res.status(429).json({
        error: "Rate limit exceeded. Please wait a moment before asking another question.",
        retryAfter: rateCheck.resetInSeconds
      });
    }

    if (!machineId) {
      return res.status(400).json({
        error: "Machine ID is required. Every AI session must be bound to a physical DMR machine.",
      });
    }

    // Log analytics event
    analytics.logEvent({
      eventType: mode === 'quiz' ? 'quiz_started' : 'ai_question_asked',
      machineId,
      moduleId,
      metadata: { questionLength: (question || '').length }
    });

    try {
      const result = await handleTutorQuery({
        machineId,
        moduleId,
        question,
        history,
        mode
      });

      res.json(result);
    } catch (err: any) {
      console.error("Error in /api/tutor:", err);
      res.status(500).json({
        answer: "DMR AI Tutor is temporarily unavailable. You can continue using the machine lessons.",
        machineId,
        machineName: DMR_MACHINES[machineId]?.name || "DMR Machine",
        isBoundaryRedirect: false,
        status: "offline_fallback"
      });
    }
  });

  // POST /api/analytics - Record learning interactions
  app.post("/api/analytics", (req: Request, res: Response) => {
    const { eventType, machineId, moduleId, metadata } = req.body;
    if (!eventType || !machineId) {
      return res.status(400).json({ error: "Missing eventType or machineId" });
    }

    const record = analytics.logEvent({
      eventType,
      machineId,
      moduleId,
      metadata
    });

    res.json({ recorded: true, id: record.id });
  });

  // GET /api/analytics/:machineId - Get summary
  app.get("/api/analytics/:machineId", (req: Request, res: Response) => {
    const stats = analytics.getMachineStats(req.params.machineId);
    res.json(stats);
  });

  // Route support: /learn/:machineId and /learn
  app.get(["/learn", "/learn/:machineId"], (req: Request, res: Response, next) => {
    // If in dev mode with Vite, let Vite serve index.html
    if (process.env.NODE_ENV !== "production") {
      next();
    } else {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    }
  });

  // Static / Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DMR Machine Learning System running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
