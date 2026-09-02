/**
 * DMR Machine Learning System - Rate Limiting & Abuse Prevention
 * 
 * Abstraction layer for controlling AI usage per student/IP/session.
 * Configurable for future production limits (daily token quota, per-student limits).
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

export class RateLimiter {
  private requests: Map<string, RateLimitRecord> = new Map();
  private maxRequestsPerWindow: number;
  private windowMs: number;

  constructor(maxRequestsPerWindow = 60, windowMs = 60 * 1000) {
    this.maxRequestsPerWindow = maxRequestsPerWindow;
    this.windowMs = windowMs;

    // Periodic cleanup of stale records every 5 minutes
    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  public checkLimit(identifier: string): { allowed: boolean; remaining: number; resetInSeconds: number } {
    const now = Date.now();
    let record = this.requests.get(identifier);

    if (!record || now > record.resetTime) {
      record = {
        count: 1,
        resetTime: now + this.windowMs
      };
      this.requests.set(identifier, record);
      return {
        allowed: true,
        remaining: this.maxRequestsPerWindow - 1,
        resetInSeconds: Math.ceil(this.windowMs / 1000)
      };
    }

    if (record.count >= this.maxRequestsPerWindow) {
      return {
        allowed: false,
        remaining: 0,
        resetInSeconds: Math.ceil((record.resetTime - now) / 1000)
      };
    }

    record.count++;
    return {
      allowed: true,
      remaining: this.maxRequestsPerWindow - record.count,
      resetInSeconds: Math.ceil((record.resetTime - now) / 1000)
    };
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.requests.entries()) {
      if (now > record.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}

export const aiRateLimiter = new RateLimiter(45, 60 * 1000); // 45 requests/minute per client
