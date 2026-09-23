# NOISELESS-X6 Dataset Library

> Official Technical Research Dataset Portal for NOISELESS-X6 Adaptive Acoustic Intelligence & Defence Noise Cancellation.

A dedicated, standalone research library that documents, organizes, and explores the complete **118 audio datasets and research corpora** supporting the NOISELESS-X6 acoustic intelligence, noise-classification, speech-protection, speech-enhancement, environmental-noise, machinery-noise, sound-event, and acoustic/RIR research pipeline.

---

## Key Features

- **Authoritative 118-Dataset Corpus**: Complete collection from `#01 Military Audio Dataset (MAD)` through `#118 AudioSetCaps` with verified external links and zero placeholders.
- **Strict Zero-3D Architecture**: Built 100% with 2D SVG vector schematics, HTML5 Canvas sinusoidal waveforms, and technical editorial typography.
- **10 Research Categories**:
  1. `MILITARY / DEFENCE`
  2. `ENVIRONMENTAL NOISE`
  3. `SOUND EVENTS`
  4. `MACHINERY / INDUSTRIAL`
  5. `SPEECH ENHANCEMENT`
  6. `NOISY SPEECH`
  7. `CLEAN SPEECH`
  8. `ACOUSTIC / RIR`
  9. `DCASE / BENCHMARKS`
  10. `GENERAL AUDIO`
- **7 Operational Use Cases**: `NOISE CLASSIFICATION`, `SPEECH PROTECTION`, `SPEECH ENHANCEMENT`, `SOUND EVENT DETECTION`, `MACHINE AUDIO`, `ACOUSTIC SIMULATION`, `GENERAL AUDIO`.
- **Interactive Research Explorer**: Real-time client-side search across names, categories, and keywords (*helicopter*, *DNS*, *speech*, *RIR*, *machinery*, *MAD*, *impulsive*), filter chips, sorting, and dynamic result counter (`118 DATASETS INDEXED` / `SHOWING X OF 118`).
- **Accessible Detail Drawer**: Keyboard-accessible (`ESC` to close) slide-out panel with research context, host domain, and direct external repository links (`target="_blank" rel="noopener noreferrer"`).
- **2D Engineering Schematics**: End-to-end signal processing flow and 8-stage interactive pipeline (Reference Mic → STFT → YAMNet 1024-dim → Task Classifier → VAD → Intelligent Controller → FxLMS/NLMS → Transducer/Error Mic).

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with tactical design tokens (`#08100c`, `#0d1511`, `#00e5ff`, `#00e599`, `#f59e0b`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Zero 3D**: Strictly no Three.js, React Three Fiber, WebGL, GLTF/GLB, or Blender models.

---

## Getting Started

### 1. Installation

```bash
git clone https://github.com/raghul-cyber/datasets-library-noceless-x6.git
cd datasets-library-noceless-x6
npm install
```

### 2. Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### 3. Production Build

```bash
npm run build
```

The production assets are generated in `dist/`.

### 4. Automated Dataset Validation

```bash
npm run validate
```

Validates:
- Exactly 118 datasets present.
- Sequential IDs 1 through 118 with zero gaps or duplicates.
- All 10 research categories matched.
- Valid external HTTP/HTTPS URLs with verified domains.

### 5. Functional Test Suite

```bash
npx tsx scripts/test-explorer-logic.mjs
```

Runs 18 unit and functional tests covering multi-attribute search, category filtering, use-case partitioning, sorting, and empty-state triggers.

---

## License & Attribution Notice

Dataset availability, licensing, attribution, registration, download permissions and redistribution conditions are determined by each dataset provider. NOISELESS-X6 provides this library as a research reference and navigation layer. Users should review individual dataset licenses before downloading or using in commercial systems.
