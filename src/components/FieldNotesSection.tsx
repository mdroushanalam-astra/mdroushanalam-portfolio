import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const essays = [
  {
    id: 'essay-01',
    title: 'The hidden economics of replacing a workflow with an AI agent',
    preview: 'Most companies calculate AI ROI by comparing agent cost to employee cost. This is wrong.',
    content: 'Most companies calculate AI ROI by comparing agent cost to employee cost. This is wrong. The real economics include: integration costs (connecting the agent to existing systems), exception handling (what happens when the agent fails), supervision overhead (someone must monitor quality), retraining cycles (as business rules change), and the opportunity cost of the humans who are freed up. A customer support agent that costs $200/month but requires $500/month in supervision and $1,000/month in integration maintenance is not saving money. The correct calculation: Total cost of AI system (infrastructure + integration + supervision + maintenance) vs. total cost of current process (labor + errors + delays + opportunity cost). Only automate when the net economics are positive AND the failure modes are acceptable.',
    tags: ['Systems', 'Economics'],
    readTime: '2 min',
  },
  {
    id: 'essay-02',
    title: 'Why most AI SaaS products are just wrappers',
    preview: 'There are roughly 15,000 AI startups. Most follow the same pattern.',
    content: 'There are roughly 15,000 AI startups. Most follow the same pattern: take an API from OpenAI or Anthropic, add a prompt template, wrap it in a UI, charge a subscription. The problem: when the underlying model improves, the wrapper becomes unnecessary. When a competitor uses the same API with a slightly better prompt, differentiation evaporates. Durable AI products need at least one of: proprietary training data that improves with usage, domain-specific fine-tuned models that generic APIs cannot match, deep workflow integration that creates switching costs, or network effects where each user makes the product better for all users. If your moat is a prompt, you do not have a moat.',
    tags: ['Product', 'Strategy'],
    readTime: '2 min',
  },
  {
    id: 'essay-03',
    title: 'What happens when software becomes autonomous',
    preview: 'We are approaching a transition where software does not merely respond to user commands.',
    content: 'We are approaching a transition where software does not merely respond to user commands but initiates actions based on observed context. An autonomous inventory system does not wait for a manager to click \'reorder.\' It monitors stock levels, predicts demand curves, evaluates supplier pricing, and places orders within pre-approved parameters. The engineering challenge is not making the system intelligent. It is defining the boundaries of its autonomy. What can it decide alone? What requires human confirmation? What must it never do? These boundary definitions are the actual product design work. Most autonomous system failures are not intelligence failures. They are boundary design failures.',
    tags: ['Intelligence', 'Systems'],
    readTime: '2 min',
  },
  {
    id: 'essay-04',
    title: 'Designing products for an AI-first internet',
    preview: 'The way people discover and interact with software is changing.',
    content: 'The way people discover and interact with software is changing. In an AI-first internet, users do not visit websites and click through menus. They describe what they need, and an agent finds, evaluates, and executes the solution. This changes product design fundamentally. Your product needs to be discoverable by AI agents (structured data, clear API documentation, machine-readable capabilities). Your interface needs to serve both humans and machines. Your value proposition needs to be expressible in a way that an AI can evaluate against alternatives. Products designed only for human browsers will become invisible as AI-mediated discovery grows.',
    tags: ['Product', 'Design'],
    readTime: '2 min',
  },
  {
    id: 'essay-05',
    title: 'The economics of human + agent organizations',
    preview: 'The future organization is not fully automated and not fully human.',
    content: 'The future organization is not fully automated and not fully human. It is a hybrid where humans and AI agents have clearly defined roles based on comparative advantage. Agents handle: high-volume repetitive tasks, data synthesis across multiple sources, pattern recognition in structured data, and 24/7 monitoring. Humans handle: relationship building, ethical judgment, creative strategy, ambiguous decision-making, and exception handling for novel situations. The management challenge is designing the handoff protocol between agent and human. Poor handoffs create worse outcomes than either pure-human or pure-agent approaches.',
    tags: ['Systems', 'Economics'],
    readTime: '2 min',
  },
  {
    id: 'essay-06',
    title: 'What I learned building TechGram',
    preview: 'TechGram was my first serious attempt at building a product from zero.',
    content: 'TechGram was my first serious attempt at building a product from zero. The core insight was correct: education is fragmented across too many disconnected tools. But I made the classic founder mistake: I tried to build the platform before validating the pedagogical model. Technology was not the bottleneck. Content supply and student acquisition were. An AI tutor without structured content is an empty room with a smart whiteboard. The second lesson: marketplace-style products need density before breadth. 100 engaged students in one subject is more valuable than 10,000 registered users across 50 subjects. If I rebuilt TechGram today, I would start with one subject, one exam, one student demographic, and prove the adaptive learning engine works before adding anything else.',
    tags: ['Ventures', 'Lessons'],
    readTime: '3 min',
  }
];

export default function FieldNotesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="field-notes" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-sm text-[#071522]/60 tracking-wider mb-4">12 / FIELD NOTES</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#071522] max-w-3xl leading-tight">
            Ideas, experiments, and lessons from the intersection of technology, product, and systems.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {essays.map((essay) => {
            const isExpanded = expandedId === essay.id;
            return (
              <motion.div 
                key={essay.id}
                layout
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden cursor-pointer hover:border-[#F2B66D]/50 transition-colors"
                onClick={() => toggleExpand(essay.id)}
              >
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {essay.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 bg-[#F8FAFC] text-[#071522]/70 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-[#071522] mb-3 leading-snug">
                    {essay.title}
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-[#071522]/80 font-body leading-relaxed mt-4 mb-6">
                          {essay.content}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[#071522]/60 font-body mb-6"
                      >
                        {essay.preview}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E2E8F0]">
                    <div className="flex items-center text-sm font-medium text-[#F2B66D]">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read
                    </div>
                    <div className="flex items-center text-sm text-[#071522]/50">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {essay.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
