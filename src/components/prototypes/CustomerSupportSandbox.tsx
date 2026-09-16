import React, { useState, useMemo } from 'react';
import { Shield, GitMerge, Search, MessageSquare, AlertTriangle, CheckCircle, ArrowRight, CornerDownRight } from 'lucide-react';

interface TicketSample {
  label: string;
  text: string;
}

const SAMPLES: TicketSample[] = [
  {
    label: "Duplicate Charge (Billing)",
    text: "I checked my bank statement this morning and noticed I was charged $49 twice for our monthly team subscription. Can you reverse the duplicate charge?"
  },
  {
    label: "Webhook 401 (Technical)",
    text: "Our production server is receiving HTTP 401 Unauthorized errors when attempting to post payloads to your v2/events webhook endpoint. Secret key verified."
  },
  {
    label: "Export CSV (How-To)",
    text: "Where do I navigate in the dashboard settings to download our historical monthly usage telemetry in CSV or XLSX format?"
  },
  {
    label: "Angry Escalation (High-Risk)",
    text: "Your platform crashed during our demo and corrupted our workspace tables! We are demanding a full contract termination and immediate refund!"
  }
];

export default function CustomerSupportSandbox() {
  const [ticketText, setTicketText] = useState(SAMPLES[0].text);

  const evaluation = useMemo(() => {
    const text = ticketText.toLowerCase();

    // High risk detection
    const isHighRisk = text.includes("corrupted") || text.includes("sue") || text.includes("lawyer") || text.includes("termination") || text.includes("demanding");

    // Billing detection
    const isBilling = text.includes("charged") || text.includes("charge") || text.includes("refund") || text.includes("invoice") || text.includes("statement") || text.includes("subscription") || text.includes("$");

    // Technical detection
    const isTechnical = text.includes("webhook") || text.includes("401") || text.includes("api") || text.includes("endpoint") || text.includes("unauthorized") || text.includes("payload") || text.includes("token");

    // How-to detection
    const isHowTo = text.includes("export") || text.includes("csv") || text.includes("download") || text.includes("navigate") || text.includes("how do i") || text.includes("where do");

    if (isHighRisk) {
      return {
        intent: "High-Severity Risk Escalation",
        confidence: 0.42,
        route: "Human Tier-3 Escalation Queue",
        status: "ESCALATION_TRIGGERED",
        citation: "SLA Matrix #09 (Contract Risk)",
        resolution: "Confidence score (0.42) fell below safe autonomous threshold (0.85). Automated response suppressed. Ticket routed to VP of Support with priority incident tag.",
        recommendedAction: "Review account audit log, verify data integrity backup, and initiate direct executive phone outreach."
      };
    }

    if (isTechnical) {
      return {
        intent: "API Authentication Failure (401)",
        confidence: 0.93,
        route: "Autonomous Dispatch (Knowledge RAG)",
        status: "AUTO_RESOLVED",
        citation: "Docs: /v2/authentication#webhook-signing",
        resolution: "The HTTP 401 on v2/events occurs when timestamp signatures differ by >300 seconds from server clock or the HMAC-SHA256 header is missing 't=' prefix.",
        recommendedAction: "Autonomous reply sent to customer containing signature header validator snippet and NTP clock sync guide."
      };
    }

    if (isBilling) {
      return {
        intent: "Billing Discrepancy (Duplicate Charge)",
        confidence: 0.91,
        route: "Autonomous Dispatch (Knowledge RAG)",
        status: "AUTO_RESOLVED",
        citation: "KB-204: Stripe Idempotency Key Handling",
        resolution: "Duplicate card authorizations typically reflect a pending bank pre-authorization hold when retry logic is triggered without an idempotency key. One charge will void within 24-48 hours.",
        recommendedAction: "Autonomous reply sent with transaction reference ID and self-service refund verification link."
      };
    }

    if (isHowTo) {
      return {
        intent: "Product Configuration / Data Export",
        confidence: 0.88,
        route: "Autonomous Dispatch (Knowledge RAG)",
        status: "AUTO_RESOLVED",
        citation: "User Guide: /analytics/reporting#data-export",
        resolution: "Historical telemetry can be exported via Settings > Workspace > Data Export > Generate CSV. Exports over 100k rows are delivered via secure S3 download link within 5 minutes.",
        recommendedAction: "Autonomous guide sent with direct deep-link to the workspace telemetry export modal."
      };
    }

    // Default unknown
    return {
      intent: "Ambiguous Inquiry / Edge Case",
      confidence: 0.58,
      route: "Human Triage Routing",
      status: "ESCALATION_TRIGGERED",
      citation: "General KB Fallback",
      resolution: "Confidence score (0.58) below boundary (0.85). Hallucination prevention active.",
      recommendedAction: "Assigned to general support queue with extracted entity metadata pre-filled."
    };
  }, [ticketText]);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 lg:p-8 border border-slate-800 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#38BDF8]">Live Confidence Gate Engine</span>
          </div>
          <h4 className="text-xl font-display font-bold text-white mt-1">Autonomous Triage & Safety Boundaries</h4>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-1">Sample Queries:</span>
          {SAMPLES.map((s) => (
            <button
              key={s.label}
              onClick={() => setTicketText(s.text)}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left: Input query */}
        <div className="lg:col-span-6 space-y-4">
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
            Incoming Customer Support Message (Editable)
          </label>
          <textarea
            rows={6}
            value={ticketText}
            onChange={(e) => setTicketText(e.target.value)}
            placeholder="Type any support inquiry here to test classification and confidence score..."
            className="w-full bg-slate-800/80 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-[#D9A036] font-body leading-relaxed"
          />

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/60">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Autonomous Threshold: 0.85</span>
              <span className={evaluation.confidence >= 0.85 ? "text-emerald-400" : "text-amber-400"}>
                Calculated: {evaluation.confidence.toFixed(2)}
              </span>
            </div>
            <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  evaluation.confidence >= 0.85 ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${evaluation.confidence * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              {evaluation.confidence >= 0.85 
                ? "Score >= 0.85 allows touchless resolution with verified citation." 
                : "Score < 0.85 triggers safety interlock: halts AI reply to prevent hallucinations."}
            </p>
          </div>
        </div>

        {/* Right: Triage result */}
        <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div>
                <span className="text-xs font-mono text-slate-400">Classified Intent</span>
                <div className="text-lg font-display font-bold text-white mt-1">
                  {evaluation.intent}
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border flex items-center gap-1.5 ${
                  evaluation.status === "AUTO_RESOLVED"
                    ? "text-emerald-400 bg-emerald-950/40 border-emerald-800"
                    : "text-amber-400 bg-amber-950/40 border-amber-800"
                }`}
              >
                {evaluation.status === "AUTO_RESOLVED" ? (
                  <CheckCircle className="w-3.5 h-3.5" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5" />
                )}
                {evaluation.status === "AUTO_RESOLVED" ? "AUTO-RESOLVED" : "ESCALATED TO HUMAN"}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Knowledge Citation
                </span>
                <span className="text-xs font-mono text-[#38BDF8] bg-slate-900 px-2.5 py-1 rounded border border-slate-800 inline-block">
                  {evaluation.citation}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  System Resolution
                </span>
                <p className="text-xs font-body text-slate-200 bg-slate-900/90 p-3 rounded-lg border border-slate-800 leading-relaxed">
                  {evaluation.resolution}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Operational Action
                </span>
                <p className="text-xs font-mono text-amber-200/90 bg-slate-900/90 p-3 rounded-lg border border-slate-800 leading-relaxed">
                  {evaluation.recommendedAction}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Routing: {evaluation.route}</span>
            <span>Zero Hallucination Gate: Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
