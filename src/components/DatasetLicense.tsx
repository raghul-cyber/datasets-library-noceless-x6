import React from 'react';
import { ShieldAlert, FileText, Scale, CheckCircle2 } from 'lucide-react';

export const DatasetLicense: React.FC = () => {
  return (
    <section id="license" className="py-20 bg-tac-base border-b border-tac-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tac-surface border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5 text-signal-amber" />
            <span>SECTION 09 // GOVERNANCE & COMPLIANCE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            DATASET ACCESS & LICENSING
          </h2>
          <p className="mt-3 text-emerald-100/70 text-base leading-relaxed font-sans">
            Terms of access, licensing frameworks, and redistribution guidelines across the 118 indexed corpora.
          </p>
        </div>

        {/* Primary Notice Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Core Terms Notice */}
          <div className="p-6 rounded bg-tac-surface border border-tac-border-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-signal-cyan mb-3">
                <FileText className="w-4 h-4" />
                <span className="uppercase font-bold tracking-wider">
                  RESEARCH REFERENCE & ACCESS TERMS
                </span>
              </div>
              <p className="text-sm font-sans text-emerald-100/90 leading-relaxed">
                Dataset availability, licensing, attribution, registration, download permissions
                and redistribution conditions are determined by each dataset provider.
              </p>
              <p className="text-sm font-sans text-emerald-200/70 leading-relaxed mt-3">
                NOISELESS-X6 provides this library as a research reference and navigation layer.
                Users should review the individual dataset license and access terms before
                downloading, modifying, redistributing or using any dataset in commercial systems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-tac-border-subtle/60 text-[11px] font-mono text-emerald-400/60">
              NON-UNIFORM LICENSING ACROSS 118 INDEPENDENT CORPORA
            </div>
          </div>

          {/* Card 2: YouTube-Derived & Media Specifics */}
          <div className="p-6 rounded bg-tac-surface border border-amber-500/30 bg-amber-950/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-signal-amber mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span className="uppercase font-bold tracking-wider">
                  SOURCE-MEDIA & REDISTRIBUTION ADVISORY
                </span>
              </div>
              <p className="text-sm font-sans text-amber-100/85 leading-relaxed">
                Some datasets require registration, research-only use, attribution, or have
                source-media licenses that differ from the dataset metadata.
              </p>
              <p className="text-sm font-sans text-amber-200/70 leading-relaxed mt-3">
                In particular, YouTube-derived datasets such as AudioSet and VGGSound provide metadata
                and video IDs; researchers must obtain and handle the underlying media according to
                its original platform source terms. Always read individual provider licenses before
                redistribution or commercial deployment.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/20 text-[11px] font-mono text-amber-300/70">
              SPECIAL ATTENTION REQUIRED FOR METADATA-ONLY BENCHMARKS
            </div>
          </div>
        </div>

        {/* Source Attribution Guidelines */}
        <div className="p-6 rounded bg-tac-surface border border-tac-border-subtle">
          <div className="flex items-center space-x-2 text-xs font-mono text-signal-mint mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span className="uppercase font-bold tracking-wider">
              AUTHORITATIVE REPOSITORY ATTRIBUTION
            </span>
          </div>
          <p className="text-xs font-sans text-emerald-200/75 leading-relaxed max-w-4xl">
            For every dataset indexed in this portal, NOISELESS-X6 retains the original dataset name,
            official repository or institutional URL, and verified host domain (e.g., GitHub, Zenodo,
            IEEE Dataport, Kaggle, university laboratory repositories). External links open directly in a new
            tab without framing or modification to ensure direct attribution to original academic authors.
          </p>
        </div>
      </div>
    </section>
  );
};
