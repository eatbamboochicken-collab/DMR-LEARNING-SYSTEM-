/**
 * DMR Machine Learning System - Analytics Event Tracker
 * 
 * Non-invasive event tracking abstraction for DMR training analytics.
 * Logs student interactions locally and provides clean hooks for database synchronization.
 */

export interface AnalyticsEvent {
  id: string;
  eventType: 
    | 'machine_opened'
    | 'module_opened'
    | 'lesson_completed'
    | 'ai_question_asked'
    | 'quiz_started'
    | 'quiz_completed'
    | 'quiz_score'
    | 'cta_whatsapp_clicked'
    | 'certificate_opened';
  machineId: string;
  moduleId?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

class AnalyticsTracker {
  private inMemoryEvents: AnalyticsEvent[] = [];
  private readonly maxInMemory = 500;

  public logEvent(event: Omit<AnalyticsEvent, 'id' | 'timestamp'>): AnalyticsEvent {
    const record: AnalyticsEvent = {
      ...event,
      id: 'evt_' + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString()
    };

    this.inMemoryEvents.push(record);
    if (this.inMemoryEvents.length > this.maxInMemory) {
      this.inMemoryEvents.shift();
    }

    return record;
  }

  public getRecentEvents(limit = 50): AnalyticsEvent[] {
    return this.inMemoryEvents.slice(-limit).reverse();
  }

  public getMachineStats(machineId: string) {
    const machineEvents = this.inMemoryEvents.filter(e => e.machineId === machineId);
    return {
      machineId,
      totalInteractions: machineEvents.length,
      questionsAsked: machineEvents.filter(e => e.eventType === 'ai_question_asked').length,
      quizzesTaken: machineEvents.filter(e => e.eventType === 'quiz_completed').length,
      whatsappInquiries: machineEvents.filter(e => e.eventType === 'cta_whatsapp_clicked').length
    };
  }
}

export const analytics = new AnalyticsTracker();
