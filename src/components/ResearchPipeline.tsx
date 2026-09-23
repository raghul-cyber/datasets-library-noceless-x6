import React, { useState } from 'react';
import { Mic, Waves, Binary, Cpu, Activity, ShieldCheck, Zap, Volume2, HelpCircle } from 'lucide-react';

interface StageDetail {
  id: string;
  name: string;
  datasets: string;
  role: string;
  formula?: string;
}

export const ResearchPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('classifier');

  const stages: Record<string, StageDetail> = {
    ref_mic: {
      id: 'ref_mic',
      name: 'Reference Microphone & Acquisition',
      datasets: 'MAD (#1), Reduced MAD (#2), DEMAND (#8), UrbanSound8K (#6)',
      role: 'Captures external ambient military and field acoustic pressure waves outside headset ear cup before acoustic transmission through chassis.',
    },
    preprocessing: {
      id: 'preprocessing',
      name: 'Preprocessing & STFT Features',
      datasets: 'FSD50K (#4), AudioSet (#3), ESC-50 (#5)',
      role: 'Pre-emphasis filtering, Hanning windowing (25ms window, 10ms hop), and Short-Time Fourier Transform yielding log-mel spectrogram representations.',
      formula: 'X(m, k) = \\sum_{n=0}^{N-1} x(n+mH) w(n) e^{-j 2\\pi kn / N}',
    },
    yamnet: {
      id: 'yamnet',
      name: 'YAMNet Latent Representation',
      datasets: 'AudioSet (#3), VGGSound (#7), WavCaps (#45)',
      role: 'Pretrained MobileNet-based convolutional network generating 1024-dimensional latent embedding vectors invariant to gain shifts.',
    },
    classifier: {
      id: 'classifier',
      name: 'Task-Specific Noise Classifier',
      datasets: 'MIMII (#19), ToyADMOS (#20), DCASE Task 2 (#51-57)',
      role: 'Identifies acoustic noise regimes into Stationary (turbines/fans), Non-Stationary (changing engine RPM/tracked vehicles), or Impulsive (gunfire/impact).',
    },
    vad: {
      id: 'vad',
      name: 'VAD & Speech Protection Guard',
      datasets: 'LibriSpeech (#91), VCTK (#93), Common Voice (#94), EARS (#96)',
      role: 'Continuous voice activity detector safeguarding operator vocal formants (300Hz–3.4kHz) from anti-noise cancellation attenuation.',
    },
    controller: {
      id: 'controller',
      name: 'Intelligent Adaptive Controller',
      datasets: 'DNS Challenge (#9, #71-77), CHiME (#23-27, #81-85), WHAM! (#12, #79)',
      role: 'Dynamically shifts adaptive step sizes (\\mu) and filter tap allocations based on real-time classification state.',
    },
    fxlms: {
      id: 'fxlms',
      name: 'FxLMS / NLMS Adaptive Anti-Noise Filter',
      datasets: 'TAU-SRIR (#113), 6DOF-SRIR (#114), BUT ReverbDB (#108), METU RIR (#115)',
      role: 'Synthesizes inverted anti-phase acoustic wave while compensating for secondary transfer function S(z) inside ear cavity.',
      formula: 'w(n+1) = w(n) + \\mu e(n) x\'(n) \\quad \\text{where } x\'(n) = \\hat{S}(z) * x(n)',
    },
    speaker: {
      id: 'speaker',
      name: 'Transducer & Error Feedback Loop',
      datasets: 'DIRHA (#87), VoiceHome (#112), Treble10-RIR (#117)',
      role: 'Acoustic transducer outputs anti-noise into ear cavity; internal error mic feeds back residual error e(n) to close the adaptive loop.',
    },
  };

  return (
    <section id="pipeline" className="py-20 bg-tac-surface border-b border-tac-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tac-base border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" />
            <span>SECTION 03 // ENGINEERING PIPELINE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            HOW THE DATA SUPPORTS NOISELESS-X6
          </h2>
          <p className="mt-3 text-emerald-100/70 text-base leading-relaxed font-sans">
            The 118 datasets directly populate specific functional stages of the NOISELESS-X6
            acoustic intelligence architecture. Explore how raw military sound is transformed
            into anti-noise through feature extraction, classification, and secondary-path simulation.
          </p>
        </div>

        {/* 2D Engineering Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main 2D Schematic Flow (8 cols) */}
          <div className="lg:col-span-8 bg-tac-base rounded border border-tac-border-subtle p-6 lg:p-8">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400/70 border-b border-tac-border-subtle/80 pb-3 mb-6">
              <span className="uppercase tracking-wider">NOISELESS-X6 ACOUSTIC SIGNAL FLOW DIAGRAM</span>
              <span className="text-[10px] text-emerald-500/50">CLICK NODE TO INSPECT DATASETS</span>
            </div>

            {/* Block 1: Reference Mic & Acquisition */}
            <div
              onClick={() => setActiveStage('ref_mic')}
              className={`cursor-pointer p-4 rounded border transition-all ${
                activeStage === 'ref_mic'
                  ? 'bg-tac-elevated border-signal-cyan shadow-md shadow-signal-cyan/10'
                  : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-emerald-950/60 text-signal-cyan border border-emerald-500/30">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400/60 uppercase">STAGE 01 // ACOUSTIC INPUT</span>
                    <h4 className="font-display font-bold text-white text-sm uppercase">REFERENCE MICROPHONE & AUDIO ACQUISITION</h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-signal-mint bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  MAD & DEMAND
                </span>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-2">
              <div className="w-0.5 h-5 bg-gradient-to-b from-signal-cyan/70 to-emerald-500/40 relative">
                <div className="absolute top-1 -left-1 w-2.5 h-2.5 rounded-full bg-signal-cyan/40 animate-ping" />
              </div>
            </div>

            {/* Block 2: Preprocessing & STFT */}
            <div
              onClick={() => setActiveStage('preprocessing')}
              className={`cursor-pointer p-4 rounded border transition-all ${
                activeStage === 'preprocessing'
                  ? 'bg-tac-elevated border-signal-cyan shadow-md shadow-signal-cyan/10'
                  : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    <Waves className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400/60 uppercase">STAGE 02 // DSP EXTRACTION</span>
                    <h4 className="font-display font-bold text-white text-sm uppercase">PREPROCESSING & STFT / LOG-MEL FEATURES</h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  FSD50K & ESC-50
                </span>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-2">
              <div className="w-0.5 h-5 bg-tac-border-medium" />
            </div>

            {/* Block 3: YAMNet Representation */}
            <div
              onClick={() => setActiveStage('yamnet')}
              className={`cursor-pointer p-4 rounded border transition-all ${
                activeStage === 'yamnet'
                  ? 'bg-tac-elevated border-signal-ai shadow-md shadow-signal-ai/10'
                  : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-indigo-950/60 text-signal-ai border border-indigo-500/30">
                    <Binary className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-signal-ai uppercase">STAGE 03 // LATENT EMBEDDING</span>
                    <h4 className="font-display font-bold text-white text-sm uppercase">YAMNet / FEATURE REPRESENTATION (1024-DIM)</h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-signal-ai bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                  AudioSet & VGGSound
                </span>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-2">
              <div className="w-0.5 h-5 bg-tac-border-medium" />
            </div>

            {/* Block 4: Classifier with 3 Branches */}
            <div
              onClick={() => setActiveStage('classifier')}
              className={`cursor-pointer p-4 rounded border transition-all ${
                activeStage === 'classifier'
                  ? 'bg-tac-elevated border-signal-mint shadow-md shadow-signal-mint/10'
                  : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-emerald-950/60 text-signal-mint border border-emerald-500/30">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-signal-mint uppercase">STAGE 04 // DECISION MATRIX</span>
                    <h4 className="font-display font-bold text-white text-sm uppercase">TASK-SPECIFIC ACOUSTIC CLASSIFIER</h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-signal-mint bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  MIMII & DCASE
                </span>
              </div>

              {/* 3 Acoustic Regimes */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-tac-border-subtle/60 text-center">
                <div className="p-2 rounded bg-tac-base border border-emerald-500/20">
                  <div className="text-[10px] font-mono text-emerald-400">REGIME A</div>
                  <div className="text-xs font-display font-bold text-emerald-200">STATIONARY</div>
                  <div className="text-[9px] text-emerald-500/70">Fan / Turbine</div>
                </div>
                <div className="p-2 rounded bg-tac-base border border-signal-cyan/30">
                  <div className="text-[10px] font-mono text-signal-cyan">REGIME B</div>
                  <div className="text-xs font-display font-bold text-white">NON-STATIONARY</div>
                  <div className="text-[9px] text-emerald-500/70">Engine / Tracks</div>
                </div>
                <div className="p-2 rounded bg-tac-base border border-signal-amber/30">
                  <div className="text-[10px] font-mono text-signal-amber">REGIME C</div>
                  <div className="text-xs font-display font-bold text-amber-200">IMPULSIVE</div>
                  <div className="text-[9px] text-amber-500/70">Blast / Gunshot</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-2">
              <div className="w-0.5 h-5 bg-tac-border-medium" />
            </div>

            {/* Block 5 & 6: VAD + Intelligent Controller (Side-by-side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setActiveStage('vad')}
                className={`cursor-pointer p-4 rounded border transition-all ${
                  activeStage === 'vad'
                    ? 'bg-tac-elevated border-signal-cyan shadow-md shadow-signal-cyan/10'
                    : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-center space-x-2 text-signal-cyan mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase">VAD SAFEGUARD</span>
                </div>
                <div className="font-display font-bold text-sm text-white">VOICE ACTIVITY DETECTION</div>
                <div className="text-[11px] text-emerald-400/60 mt-1">LibriSpeech & VCTK Speech Pass</div>
              </div>

              <div
                onClick={() => setActiveStage('controller')}
                className={`cursor-pointer p-4 rounded border transition-all ${
                  activeStage === 'controller'
                    ? 'bg-tac-elevated border-signal-mint shadow-md shadow-signal-mint/10'
                    : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-center space-x-2 text-signal-mint mb-1">
                  <Activity className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase">STEP CONTROL</span>
                </div>
                <div className="font-display font-bold text-sm text-white">INTELLIGENT CONTROLLER</div>
                <div className="text-[11px] text-emerald-400/60 mt-1">DNS Challenge & CHiME Adaptation</div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-2">
              <div className="w-0.5 h-5 bg-tac-border-medium" />
            </div>

            {/* Block 7: FxLMS / NLMS */}
            <div
              onClick={() => setActiveStage('fxlms')}
              className={`cursor-pointer p-4 rounded border transition-all ${
                activeStage === 'fxlms'
                  ? 'bg-tac-elevated border-signal-cyan shadow-md shadow-signal-cyan/10'
                  : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-emerald-950/60 text-signal-cyan border border-emerald-500/30">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-signal-cyan uppercase">STAGE 05 // ADAPTIVE FILTERING</span>
                    <h4 className="font-display font-bold text-white text-sm uppercase">FxLMS / NLMS & SECONDARY PATH S(z)</h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-signal-mint bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  TAU-SRIR & BUT ReverbDB
                </span>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-2">
              <div className="w-0.5 h-5 bg-tac-border-medium" />
            </div>

            {/* Block 8: Speaker & Error Mic */}
            <div
              onClick={() => setActiveStage('speaker')}
              className={`cursor-pointer p-4 rounded border transition-all ${
                activeStage === 'speaker'
                  ? 'bg-tac-elevated border-signal-mint shadow-md shadow-signal-mint/10'
                  : 'bg-tac-surface border-tac-border-subtle hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-emerald-950/60 text-signal-mint border border-emerald-500/30">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-signal-mint uppercase">STAGE 06 // ACOUSTIC FEEDBACK</span>
                    <h4 className="font-display font-bold text-white text-sm uppercase">TRANSDUCER ANTI-NOISE → ERROR MICROPHONE</h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  Closed Error Loop e(n)
                </span>
              </div>
            </div>
          </div>

          {/* Side Inspection Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-tac-base rounded border border-emerald-500/30 p-6 relative shadow-xl shadow-black/50">
              <div className="flex items-center space-x-2 text-xs font-mono text-signal-cyan mb-4 pb-2 border-b border-tac-border-subtle">
                <HelpCircle className="w-4 h-4" />
                <span className="uppercase">RESEARCH STAGE INSPECTION</span>
              </div>

              {stages[activeStage] && (
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400/60 uppercase">ACTIVE STAGE</span>
                    <h3 className="font-display font-bold text-lg text-white mt-0.5">
                      {stages[activeStage].name}
                    </h3>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-emerald-400/60 uppercase">KEY NOISELESS-X6 CORPORA</span>
                    <div className="mt-1 p-2.5 rounded bg-tac-surface border border-tac-border-subtle text-xs font-mono text-signal-mint">
                      {stages[activeStage].datasets}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-emerald-400/60 uppercase">RESEARCH & ARCHITECTURAL ROLE</span>
                    <p className="mt-1 text-xs text-emerald-100/80 font-sans leading-relaxed">
                      {stages[activeStage].role}
                    </p>
                  </div>

                  {stages[activeStage].formula && (
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-emerald-400/60 uppercase">MATHEMATICAL FORMULATION</span>
                      <div className="mt-1 p-2.5 rounded bg-tac-surface border border-tac-border-subtle text-[11px] font-mono text-signal-cyan overflow-x-auto">
                        {stages[activeStage].formula}
                      </div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-tac-border-subtle flex items-center justify-between text-[11px] font-mono text-emerald-400/60">
                    <span>2D SCHEMATIC MAPPING</span>
                    <span className="text-signal-mint">100% HARDWARE GROUNDED</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
