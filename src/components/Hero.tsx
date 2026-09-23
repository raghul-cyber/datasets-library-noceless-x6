import React, { useEffect, useRef } from 'react';
import { ArrowDown, Cpu, Shield, Activity, Radio, FileText } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPipelineClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPipelineClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 450;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height * 0.55;

      // Draw subtle background frequency grid
      ctx.strokeStyle = 'rgba(28, 40, 33, 0.4)';
      ctx.lineWidth = 1;
      const stepX = 40;
      const stepY = 30;

      for (let x = 0; x < width; x += stepX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += stepY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw 2D primary acoustic waveform (slow horizontal phase increment)
      ctx.beginPath();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)'; // cyan signal

      for (let x = 0; x < width; x += 3) {
        const normX = x / width;
        // Superposition of acoustic frequencies
        const y =
          centerY +
          Math.sin(normX * 8 + phase) * 22 +
          Math.sin(normX * 24 + phase * 1.5) * 12 +
          Math.sin(normX * 52 - phase * 0.8) * 6;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary anti-phase wave (simulating ANC cancellation)
      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(0, 229, 153, 0.35)'; // mint anti-noise

      for (let x = 0; x < width; x += 3) {
        const normX = x / width;
        const y =
          centerY +
          Math.sin(normX * 8 + phase + Math.PI * 0.96) * 20 +
          Math.sin(normX * 24 + phase * 1.5 + Math.PI * 0.94) * 10 +
          Math.sin(normX * 52 - phase * 0.8 + Math.PI) * 5;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Subtle spectrogram energy bars along bottom
      const barCount = Math.floor(width / 14);
      for (let i = 0; i < barCount; i++) {
        const barX = i * 14;
        const barHeight =
          Math.abs(Math.sin(i * 0.2 + phase * 0.5) * Math.cos(i * 0.1 - phase * 0.3)) * 36 + 4;
        ctx.fillStyle = i % 4 === 0 ? 'rgba(0, 229, 255, 0.12)' : 'rgba(0, 229, 153, 0.08)';
        ctx.fillRect(barX, height - barHeight - 10, 8, barHeight);
      }

      phase += 0.015; // Slow, dignified motion
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-tac-border-subtle bg-gradient-to-b from-tac-base via-tac-surface/50 to-tac-base">
      {/* 2D Animated Waveform / Spectrogram Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-75">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-gradient-to-r from-tac-base via-transparent to-tac-base" />
        <div className="absolute inset-0 bg-gradient-to-t from-tac-base via-transparent to-transparent" />
      </div>

      {/* Illustrative Simulation Disclaimer Badge */}
      <div className="absolute top-24 right-4 sm:right-8 z-10 hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded bg-tac-surface/80 border border-tac-border-subtle text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest backdrop-blur-sm">
        <Radio className="w-3 h-3 text-signal-cyan animate-pulse" />
        <span>ILLUSTRATIVE SIGNAL VISUALIZATION</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Micro-label */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-tac-surface border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" />
            <span>NOISELESS-X6 / RESEARCH DATA</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[1.05] mb-4">
            <span className="text-signal-cyan block">118</span>
            <span className="text-white block">AUDIO DATASETS</span>
            <span className="text-emerald-300/80 text-2xl sm:text-4xl lg:text-5xl font-medium tracking-normal block mt-2">
              FOR ADAPTIVE NOISE CANCELLATION
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-emerald-100/75 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-sans">
            An organized research library covering military audio, environmental noise, speech
            enhancement, sound events, machinery acoustics and acoustic-path simulation.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-emerald-500 hover:bg-emerald-400 text-tac-base font-mono font-semibold text-sm tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 active:scale-95 group"
            >
              <span>EXPLORE DATASETS</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onPipelineClick}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-tac-surface hover:bg-tac-elevated border border-tac-border-medium hover:border-emerald-500/50 text-emerald-200 font-mono text-sm tracking-wider uppercase transition-all active:scale-95"
            >
              <Cpu className="w-4 h-4 text-signal-cyan" />
              <span>VIEW RESEARCH PIPELINE</span>
            </button>

            <a
              href="#license"
              className="inline-flex items-center space-x-1.5 px-4 py-3 rounded text-emerald-400/70 hover:text-signal-cyan font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DATASET NOTICE</span>
            </a>
          </div>

          {/* Technical sub-indicators */}
          <div className="mt-10 pt-6 border-t border-tac-border-subtle/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-emerald-300/60 uppercase tracking-widest">
            <span className="flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-signal-mint" />
              <span>MILITARY / DEFENCE FOCUS</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-signal-cyan" />
              <span>MULTI-DOMAIN ACOUSTIC COVERAGE</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Radio className="w-3.5 h-3.5 text-signal-ai" />
              <span>SECONDARY PATH S(z) MODELING</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
