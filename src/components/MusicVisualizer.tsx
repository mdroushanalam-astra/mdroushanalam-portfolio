import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music, SkipForward } from "lucide-react";

const BAR_COUNT = 48;
const FFT_SIZE = 256;

interface Track {
  name: string;
  bpm: number;
  frequencies: number[];
  types: OscillatorType[];
  gains: number[];
  filterFreq: number;
}

const tracks: Track[] = [
  {
    name: "Midnight Focus",
    bpm: 72,
    frequencies: [110, 164.81, 220, 277.18, 329.63, 440],
    types: ["sine", "sine", "triangle", "sine", "triangle", "sine"],
    gains: [0.25, 0.15, 0.2, 0.1, 0.12, 0.08],
    filterFreq: 800,
  },
  {
    name: "Neon Dreams",
    bpm: 85,
    frequencies: [146.83, 174.61, 220, 293.66, 349.23, 440],
    types: ["triangle", "sine", "triangle", "sine", "sine", "triangle"],
    gains: [0.2, 0.18, 0.15, 0.12, 0.1, 0.06],
    filterFreq: 1200,
  },
  {
    name: "Deep Space",
    bpm: 60,
    frequencies: [65.41, 98, 130.81, 196, 261.63, 392],
    types: ["sine", "sine", "sine", "triangle", "sine", "sine"],
    gains: [0.3, 0.2, 0.18, 0.1, 0.08, 0.05],
    filterFreq: 600,
  },
];

const MusicVisualizer = () => {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [trackIndex, setTrackIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const nodesRef = useRef<{ oscs: OscillatorNode[]; lfos: OscillatorNode[]; gains: GainNode[] }>({ oscs: [], lfos: [], gains: [] });
  const masterGainRef = useRef<GainNode | null>(null);
  const rafRef = useRef<number>(0);
  const dataRef = useRef<Uint8Array>(new Uint8Array(FFT_SIZE / 2));

  const stopAudio = useCallback(() => {
    const { oscs, lfos } = nodesRef.current;
    [...oscs, ...lfos].forEach((o) => { try { o.stop(); } catch {} });
    nodesRef.current = { oscs: [], lfos: [], gains: [] };
    audioCtxRef.current?.close();
    audioCtxRef.current = null;
    analyserRef.current = null;
    masterGainRef.current = null;
  }, []);

  const startAudio = useCallback((track: Track) => {
    if (audioCtxRef.current) stopAudio();

    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    const analyser = ctx.createAnalyser();
    analyser.fftSize = FFT_SIZE;
    analyser.smoothingTimeConstant = 0.8;
    analyserRef.current = analyser;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.1;
    masterGainRef.current = masterGain;

    // Low-pass filter for warmth
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = track.filterFreq;
    filter.Q.value = 1;

    // Reverb via delay
    const delay = ctx.createDelay();
    delay.delayTime.value = 0.3;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.25;
    const delayGain = ctx.createGain();
    delayGain.gain.value = 0.3;

    masterGain.connect(filter);
    filter.connect(analyser);
    filter.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(analyser);
    analyser.connect(ctx.destination);

    const oscs: OscillatorNode[] = [];
    const lfos: OscillatorNode[] = [];
    const gains: GainNode[] = [];

    track.frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = track.types[i];
      osc.frequency.value = freq;
      oscGain.gain.value = track.gains[i];

      // Vibrato LFO
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.15 + Math.random() * 0.4;
      lfoGain.gain.value = freq * 0.008;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      // Tremolo LFO
      const tremoloLfo = ctx.createOscillator();
      const tremoloGain = ctx.createGain();
      tremoloLfo.frequency.value = 0.05 + Math.random() * 0.15;
      tremoloGain.gain.value = track.gains[i] * 0.3;
      tremoloLfo.connect(tremoloGain);
      tremoloGain.connect(oscGain.gain);
      tremoloLfo.start();

      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      oscs.push(osc);
      lfos.push(lfo, tremoloLfo);
      gains.push(oscGain);
    });

    nodesRef.current = { oscs, lfos, gains };
    dataRef.current = new Uint8Array(analyser.frequencyBinCount);
  }, [stopAudio]);

  const togglePlay = () => {
    if (playing) {
      stopAudio();
    } else {
      startAudio(tracks[trackIndex]);
    }
    setPlaying(!playing);
  };

  const nextTrack = () => {
    const next = (trackIndex + 1) % tracks.length;
    setTrackIndex(next);
    if (playing) {
      startAudio(tracks[next]);
    }
  };

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (analyserRef.current) {
        analyserRef.current.getByteFrequencyData(dataRef.current as Uint8Array<ArrayBuffer>);
      }

      const barWidth = w / BAR_COUNT;
      const step = Math.max(1, Math.floor(dataRef.current.length / BAR_COUNT));

      for (let i = 0; i < BAR_COUNT; i++) {
        let val: number;
        if (analyserRef.current && playing) {
          val = dataRef.current[i * step] / 255;
        } else {
          val = 0.08 + Math.sin(Date.now() / 1000 + i * 0.3) * 0.06;
        }

        const barH = val * h * 0.9;
        const x = i * barWidth;
        const progress = i / BAR_COUNT;

        const hue = 217 + (45 - 217) * progress;
        const sat = progress < 0.5 ? "91%" : "93%";
        const light = progress < 0.5 ? "60%" : "47%";

        ctx.shadowColor = `hsl(${hue}, ${sat}, ${light})`;
        ctx.shadowBlur = 6;

        const gradient = ctx.createLinearGradient(x, h, x, h - barH);
        gradient.addColorStop(0, `hsla(${hue}, ${sat}, ${light}, 0.9)`);
        gradient.addColorStop(1, `hsla(${hue}, ${sat}, ${light}, 0.25)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(x + 1, h - barH, barWidth - 2, barH);

        ctx.fillStyle = `hsla(${hue}, ${sat}, 85%, 0.8)`;
        ctx.fillRect(x + 1, h - barH - 2, barWidth - 2, 2);
      }

      ctx.shadowBlur = 0;
      rafRef.current = requestAnimationFrame(draw);
    };

    canvas.width = 300;
    canvas.height = 80;
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing]);

  useEffect(() => {
    return () => {
      stopAudio();
      cancelAnimationFrame(rafRef.current);
    };
  }, [stopAudio]);

  if (!visible) return null;

  const track = tracks[trackIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 right-6 z-40 flex items-end gap-2"
      >
        <motion.div
          className="rounded-2xl overflow-hidden backdrop-blur-xl border border-border/30"
          style={{
            background: "linear-gradient(135deg, hsl(220 40% 10% / 0.9) 0%, hsl(217 71% 15% / 0.95) 100%)",
          }}
          layout
        >
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center gap-2 mb-1">
              <Music className="w-3 h-3 text-gold" />
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider font-medium">
                {track.name}
              </span>
              {playing && (
                <span className="flex gap-0.5 ml-auto">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-0.5 bg-gold rounded-full"
                      animate={{ height: [4, 10, 4] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </span>
              )}
            </div>
            <p className="text-[9px] text-muted-foreground mb-2">{track.bpm} BPM • Ambient Lo-Fi</p>
            <canvas ref={canvasRef} className="w-[200px] h-[50px] rounded-lg" />
          </div>
          <div className="flex items-center justify-between px-4 pb-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="flex items-center gap-1 text-[10px] font-medium text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {playing ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                {playing ? "Pause" : "Play"}
              </button>
              <button
                onClick={nextTrack}
                className="text-primary-foreground/40 hover:text-gold transition-colors"
                title="Next track"
              >
                <SkipForward className="w-3 h-3" />
              </button>
            </div>
            <button
              onClick={() => { stopAudio(); setPlaying(false); setVisible(false); }}
              className="text-[10px] text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MusicVisualizer;
