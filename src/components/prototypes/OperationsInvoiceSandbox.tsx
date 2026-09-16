import React, { useState, useMemo } from 'react';
import { FileText, CheckCircle2, AlertOctagon, ArrowUpRight, DollarSign, Database, ShieldAlert, Cpu } from 'lucide-react';

interface InvoicePreset {
  name: string;
  vendor: string;
  poNumber: string;
  subtotal: number;
  taxRate: number;
  claimedTotal: number;
  expectedOutcome: string;
}

const PRESETS: InvoicePreset[] = [
  {
    name: "Standard Approved (< $1,000)",
    vendor: "Cloudflare Inc.",
    poNumber: "PO-7741",
    subtotal: 750,
    taxRate: 8,
    claimedTotal: 810,
    expectedOutcome: "Auto-Approved"
  },
  {
    name: "Math Discrepancy (Flagged)",
    vendor: "Acme Hardware Ltd.",
    poNumber: "PO-8820",
    subtotal: 1000,
    taxRate: 10,
    claimedTotal: 1250,
    expectedOutcome: "Arithmetic Error"
  },
  {
    name: "Executive Threshold (> $5,000)",
    vendor: "NVIDIA Compute Fleet",
    poNumber: "PO-9912",
    subtotal: 14000,
    taxRate: 10,
    claimedTotal: 15400,
    expectedOutcome: "VP Sign-off Required"
  },
  {
    name: "Invalid PO Number (Not in ERP)",
    vendor: "Unknown Vendor Corp",
    poNumber: "PO-0000",
    subtotal: 450,
    taxRate: 5,
    claimedTotal: 472.50,
    expectedOutcome: "ERP Match Failed"
  }
];

// Mock ERP Purchase Orders
const ERP_POS: Record<string, { approvedAmount: number; vendor: string }> = {
  "PO-7741": { approvedAmount: 850, vendor: "Cloudflare Inc." },
  "PO-8820": { approvedAmount: 1100, vendor: "Acme Hardware Ltd." },
  "PO-9912": { approvedAmount: 16000, vendor: "NVIDIA Compute Fleet" }
};

export default function OperationsInvoiceSandbox() {
  const [vendor, setVendor] = useState(PRESETS[0].vendor);
  const [poNumber, setPoNumber] = useState(PRESETS[0].poNumber);
  const [subtotal, setSubtotal] = useState(PRESETS[0].subtotal);
  const [taxRate, setTaxRate] = useState(PRESETS[0].taxRate);
  const [claimedTotal, setClaimedTotal] = useState(PRESETS[0].claimedTotal);

  const applyPreset = (preset: InvoicePreset) => {
    setVendor(preset.vendor);
    setPoNumber(preset.poNumber);
    setSubtotal(preset.subtotal);
    setTaxRate(preset.taxRate);
    setClaimedTotal(preset.claimedTotal);
  };

  const audit = useMemo(() => {
    const calculatedTax = (subtotal * taxRate) / 100;
    const trueTotal = subtotal + calculatedTax;
    const mathDelta = Math.abs(trueTotal - claimedTotal);
    const hasMathError = mathDelta > 0.05;

    // ERP Verification
    const erpRecord = ERP_POS[poNumber];
    const poFound = Boolean(erpRecord);
    const vendorMatches = poFound && erpRecord.vendor.toLowerCase() === vendor.toLowerCase();

    // Decision Logic
    if (hasMathError) {
      return {
        status: "EXCEPTION_REJECTED",
        badge: "ARITHMETIC EXCEPTION",
        badgeColor: "text-rose-400 bg-rose-950/40 border-rose-800",
        summary: `Invoice total claim of $${claimedTotal.toFixed(2)} does not match calculated total of $${trueTotal.toFixed(2)} (Discrepancy: $${mathDelta.toFixed(2)}).`,
        action: "Rejected by autonomous validation. Vendor notified with automated delta statement.",
        auditSteps: [
          { check: "Entity Extraction", result: "Passed", detail: "Extracted 5 key-value pairs" },
          { check: "Math Verification", result: "Failed", detail: `Subtotal $${subtotal} + Tax $${calculatedTax.toFixed(2)} != $${claimedTotal}` },
          { check: "ERP 3-Way Match", result: "Halted", detail: "Halted due to arithmetic exception" }
        ]
      };
    }

    if (!poFound || !vendorMatches) {
      return {
        status: "EXCEPTION_PO_MISSING",
        badge: "ERP VALIDATION FAILURE",
        badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800",
        summary: !poFound 
          ? `Purchase Order ${poNumber} does not exist in the ERP system.`
          : `PO ${poNumber} belongs to '${erpRecord.vendor}', but invoice vendor is '${vendor}'.`,
        action: "Held in exception queue. Routed to Procurement Officer for identity verification.",
        auditSteps: [
          { check: "Entity Extraction", result: "Passed", detail: "Extracted 5 key-value pairs" },
          { check: "Math Verification", result: "Passed", detail: "Calculated tax and totals reconcile" },
          { check: "ERP 3-Way Match", result: "Failed", detail: "Unmatched PO identifier in database" }
        ]
      };
    }

    if (trueTotal > 5000) {
      return {
        status: "HIGH_VALUE_ESCALATION",
        badge: "VP EXECUTIVE SIGN-OFF",
        badgeColor: "text-sky-400 bg-sky-950/40 border-sky-800",
        summary: `Invoice is mathematically valid and matches ${poNumber}, but $${trueTotal.toLocaleString()} exceeds the $5,000 autonomous threshold.`,
        action: "Packaged into 1-click Slack/Email briefing and dispatched to VP of Finance for sign-off.",
        auditSteps: [
          { check: "Entity Extraction", result: "Passed", detail: "Extracted 5 key-value pairs" },
          { check: "Math Verification", result: "Passed", detail: "Reconciled to zero variance" },
          { check: "ERP 3-Way Match", result: "Passed", detail: `Linked to active PO limit ($${erpRecord.approvedAmount})` },
          { check: "Autonomous Threshold", result: "Triggered", detail: `Amount > $5,000 policy ceiling` }
        ]
      };
    }

    return {
      status: "AUTO_APPROVED",
      badge: "TOUCHLESS AUTO-APPROVAL",
      badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
      summary: `Invoice passed 3-way match against ERP ${poNumber}. Total $${trueTotal.toFixed(2)} is within autonomous limit ($1,000).`,
      action: "Scheduled for payment batch via ERP API. Zero human touches required.",
      auditSteps: [
        { check: "Entity Extraction", result: "Passed", detail: "Extracted 5 key-value pairs" },
        { check: "Math Verification", result: "Passed", detail: "Zero variance calculated" },
        { check: "ERP 3-Way Match", result: "Passed", detail: `Validated against PO ${poNumber}` },
        { check: "Policy Compliance", result: "Passed", detail: "Approved for scheduled ACH payout" }
      ]
    };
  }, [vendor, poNumber, subtotal, taxRate, claimedTotal]);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 lg:p-8 border border-slate-800 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D9A036] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#D9A036]">Live Reconciliation Engine</span>
          </div>
          <h4 className="text-xl font-display font-bold text-white mt-1">Autonomous Invoice & ERP Reconciliation</h4>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-1">Test Scenarios:</span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => applyPreset(p)}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left: Invoice Data Inputs */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Vendor Name</label>
              <input
                type="text"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D9A036]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">PO Number (ERP)</label>
              <input
                type="text"
                value={poNumber}
                onChange={(e) => setPoNumber(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D9A036]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Subtotal ($)</label>
              <input
                type="number"
                value={subtotal}
                onChange={(e) => setSubtotal(Number(e.target.value))}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D9A036]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Tax Rate (%)</label>
              <input
                type="number"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D9A036]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Claimed Total ($)</label>
              <input
                type="number"
                value={claimedTotal}
                onChange={(e) => setClaimedTotal(Number(e.target.value))}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D9A036]"
              />
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/60 text-xs font-mono space-y-1.5 text-slate-400">
            <div className="flex justify-between">
              <span>Calculated Subtotal:</span>
              <span className="text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Calculated Tax ({taxRate}%):</span>
              <span className="text-white">${((subtotal * taxRate) / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-slate-700 text-slate-300 font-bold">
              <span>Reconciled Sum:</span>
              <span className="text-white">${(subtotal + (subtotal * taxRate) / 100).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right: Reconciliation Log & Decisions */}
        <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div>
                <span className="text-xs font-mono text-slate-400">Reconciliation Verdict</span>
                <div className="text-base font-display font-bold text-white mt-1">
                  {audit.summary}
                </div>
              </div>
            </div>

            <div className="my-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border ${audit.badgeColor}`}>
                {audit.badge}
              </span>
            </div>

            {/* Audit Trail */}
            <div className="space-y-2 mt-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Forensic Verification Steps
              </span>
              {audit.auditSteps.map((step, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono bg-slate-900/80 px-3 py-2 rounded border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className={step.result === "Passed" ? "text-emerald-400" : "text-amber-400"}>
                      {step.result === "Passed" ? "✓" : "!"}
                    </span>
                    <span className="text-slate-300">{step.check}</span>
                  </div>
                  <span className="text-slate-500">{step.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400 bg-slate-900/60 p-3 rounded-lg">
            <span className="text-[#38BDF8] font-bold block mb-1">SYSTEM ACTION:</span>
            {audit.action}
          </div>
        </div>
      </div>
    </div>
  );
}
