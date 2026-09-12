import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Loader2, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const ResumeDownload = () => {
  const [open, setOpen] = useState(false);
  const [targetRole, setTargetRole] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-resume", {
        body: { targetRole: targetRole.trim() || undefined },
      });
      if (error) throw error;

      const html = data.html;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      // Open in new tab for printing/PDF
      const win = window.open(url, "_blank");
      if (win) {
        win.onload = () => {
          setTimeout(() => win.print(), 500);
        };
      }
      URL.revokeObjectURL(url);
      setOpen(false);
    } catch (e) {
      console.error("Resume generation failed:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/30 shadow-lg text-sm font-medium text-foreground"
        style={{ background: "hsl(var(--card) / 0.9)", backdropFilter: "blur(16px)" }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <FileText className="w-4 h-4 text-primary" />
        Download Resume
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9999] w-[90vw] max-w-sm"
            >
              <div
                className="rounded-2xl border border-border/50 shadow-2xl p-5"
                style={{ background: "hsl(var(--card))" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground text-sm">Generate Resume</h3>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mb-3">
                  Optionally enter a target role to get an AI-tailored summary:
                </p>

                <Input
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  placeholder="e.g. AI Product Manager at Google"
                  className="text-sm mb-3"
                  disabled={loading}
                />

                <Button
                  onClick={generate}
                  disabled={loading}
                  className="w-full gradient-royal text-royal-foreground border-0"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate & Download
                    </>
                  )}
                </Button>

                <p className="text-[10px] text-muted-foreground/50 text-center mt-2">
                  Opens as printable HTML: use Print → Save as PDF
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeDownload;
