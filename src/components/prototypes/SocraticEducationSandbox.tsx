import React, { useState } from 'react';
import { GitMerge, Brain, CheckCircle, HelpCircle, ArrowRight, Lightbulb, Sparkles } from 'lucide-react';

interface ConceptNode {
  id: string;
  title: string;
  category: "Prerequisite" | "Core Theory" | "Production Scale";
  question: string;
  options: { text: string; correct: boolean; feedback: string }[];
}

const CONCEPTS: ConceptNode[] = [
  {
    id: "embeddings",
    title: "Vector Embeddings & Latent Space",
    category: "Core Theory",
    question: "Why do we map unstructured text into dense floating-point vectors instead of using keyword indexes?",
    options: [
      {
        text: "Because floating point numbers consume less disk storage than string text.",
        correct: false,
        feedback: "Misconception: Dense vectors (e.g. 1536 floats) are actually significantly larger in raw bytes than text strings. The real benefit is mathematical geometric proximity."
      },
      {
        text: "Because spatial distance in latent space encodes semantic meaning (synonyms and intent).",
        correct: true,
        feedback: "Correct mental model! By projecting text into geometric coordinates, words with identical meanings cluster together even if they share zero vocabulary overlap."
      },
      {
        text: "Because database indexes cannot index English words.",
        correct: false,
        feedback: "Misconception: Traditional inverted indexes (like ElasticSearch) index words extremely well, but they fail when a user searches for 'automobile' and the document says 'car'."
      }
    ]
  },
  {
    id: "similarity",
    title: "Cosine Similarity vs Euclidean Distance",
    category: "Prerequisite",
    question: "In text search, why is cosine similarity preferred over Euclidean (L2) distance?",
    options: [
      {
        text: "Cosine similarity measures the angle between vectors, normalizing for document length.",
        correct: true,
        feedback: "Spot on. A 10-page paper and a 1-paragraph summary on the same topic point in the same directional vector, even though the long paper's vector magnitude is far larger."
      },
      {
        text: "Cosine distance is 100x faster to calculate mathematically.",
        correct: false,
        feedback: "Not quite. Both operations have similar mathematical complexity. The difference is normalization: cosine measures angular direction rather than absolute magnitude."
      }
    ]
  },
  {
    id: "hnsw",
    title: "HNSW Graph Indexing (Production)",
    category: "Production Scale",
    question: "Why can't enterprise search compare a query vector against all 10 million vectors linearly (exact KNN)?",
    options: [
      {
        text: "O(n) linear scanning produces 500ms+ latency, violating sub-50ms SLA at scale.",
        correct: true,
        feedback: "Exact systems reasoning! Linear scan scales poorly. HNSW constructs multi-layer navigable small-world graphs to achieve logarithmic O(log N) retrieval in under 8ms."
      },
      {
        text: "Because GPU memory cannot hold vectors.",
        correct: false,
        feedback: "Modern enterprise clusters can easily hold millions of vectors in memory; the constraint is computational clock cycles required for 10M dot-products per query."
      }
    ]
  }
];

export default function SocraticEducationSandbox() {
  const [selectedConceptIndex, setSelectedConceptIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const activeConcept = CONCEPTS[selectedConceptIndex];

  const handleSelectConcept = (idx: number) => {
    setSelectedConceptIndex(idx);
    setSelectedOption(null);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 lg:p-8 border border-slate-800 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">Live Cognitive Navigator</span>
          </div>
          <h4 className="text-xl font-display font-bold text-white mt-1">Concept Graph & Socratic Diagnosis</h4>
        </div>
      </div>

      {/* Interactive Concept Dependency Flow */}
      <div className="mt-6">
        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
          Concept Prerequisite Hierarchy (Click to Inspect)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {CONCEPTS.map((concept, idx) => {
            const isActive = selectedConceptIndex === idx;
            return (
              <button
                key={concept.id}
                onClick={() => handleSelectConcept(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-950/50 border-indigo-500 shadow-lg shadow-indigo-950/50'
                    : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 uppercase">
                  {concept.category}
                </span>
                <h5 className="font-display font-semibold text-sm text-white mt-2 flex items-center justify-between">
                  {concept.title}
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
                </h5>
              </button>
            );
          })}
        </div>
      </div>

      {/* Socratic Diagnostic Challenge */}
      <div className="mt-8 bg-slate-950/80 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4 h-4 text-[#D9A036]" />
          <span className="text-xs font-mono text-[#D9A036] uppercase tracking-wider">
            Diagnostic Mental Model Test
          </span>
        </div>

        <p className="text-base font-body text-slate-100 font-medium leading-relaxed mb-6">
          {activeConcept.question}
        </p>

        {/* Diagnostic Options */}
        <div className="space-y-3">
          {activeConcept.options.map((opt, oIdx) => {
            const isPicked = selectedOption === oIdx;
            return (
              <button
                key={oIdx}
                onClick={() => setSelectedOption(oIdx)}
                className={`w-full text-left p-4 rounded-lg border text-sm transition-all duration-200 ${
                  isPicked
                    ? opt.correct
                      ? 'bg-emerald-950/40 border-emerald-600 text-emerald-100'
                      : 'bg-rose-950/40 border-rose-600 text-rose-100'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-slate-600 shrink-0 flex items-center justify-center mt-0.5 text-xs font-mono">
                    {String.fromCharCode(65 + oIdx)}
                  </div>
                  <span className="font-body leading-relaxed">{opt.text}</span>
                </div>

                {/* Socratic Feedback Box */}
                {isPicked && (
                  <div
                    className={`mt-4 pt-3 border-t text-xs font-body leading-relaxed ${
                      opt.correct
                        ? 'border-emerald-800/80 text-emerald-300'
                        : 'border-rose-800/80 text-rose-300'
                    }`}
                  >
                    <div className="font-mono uppercase font-bold text-[10px] tracking-wider mb-1">
                      {opt.correct ? "Pedagogical Insight (Mastery Verified)" : "Cognitive Misconception Detected"}
                    </div>
                    {opt.feedback}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
