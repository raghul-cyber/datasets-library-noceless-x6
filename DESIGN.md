# NOISELESS-X6 DATASET LIBRARY // DESIGN SYSTEM & SPECIFICATION (DESIGN.md)
*Official Technical Specification | Google Stitch & Google Antigravity Research Portal*

---

## 1. Design Vision & Philosophy
The **NOISELESS-X6 Dataset Library** is a dedicated, standalone research portal that indexes, explores, and contextualizes the 118 audio datasets and research corpora used across the NOISELESS-X6 acoustic intelligence, noise-classification, speech-protection, speech-enhancement, environmental-noise, machinery-noise, sound-event, and acoustic/RIR research pipeline.

### Core Character & Tone:
- **Military Technology Research**: High-density information, surgical layout precision, muted tactical olive and matte graphite surfaces.
- **Acoustic Intelligence Laboratory**: Real-time signal trace aesthetics, frequency grid coordinates, spectrogram-style contours, discrete decibel/frequency labels.
- **Aerospace Engineering Whitepaper**: Crisp typography, high scannability, strict hierarchy, no generic SaaS gradients, no frivolous marketing fluff.
- **Authentic & Human-Designed**: Engineered with intention, purposeful spacing, and semantic design tokens.

### Non-Negotiable Directives:
1. **ABSOLUTE ZERO 3D**:
   - Zero Three.js, React Three Fiber, Drei, WebGL, GLB/GLTF, Blender models, 3D cards, 3D waveforms, 3D particles, or 3D holograms.
   - All visual elements are strictly **2D SVG, Canvas, CSS, HTML, and high-precision technical vector schematics**.
2. **ZERO FAKE DATA / BENCHMARKS**:
   - No fabricated accuracy percentages (e.g., "95% accuracy"), no invented dB reduction metrics, and no simulated sensor streams claiming to be live hardware.
   - All animated waveforms/spectrograms are explicitly labeled: `ILLUSTRATIVE SIGNAL VISUALIZATION`.
3. **ALL 118 DATASETS VERBATIM**:
   - All 118 records (#1 MAD through #118 AudioSetCaps) from the master NOISELESS-X specification must be indexed with real, verified external URLs, exact categories, and primary research applications.

---

## 2. Color Palette & Tactical Design Tokens

The palette is rooted in deep military olive, matte graphite, and surgical signal hues. High contrast, low eye fatigue, and functional semantic meaning are prioritized over flashy gaming aesthetics.

| Token Name | Hex Code | HSL / RGB | Purpose / Semantic Context |
| :--- | :--- | :--- | :--- |
| `--color-bg-base` | `#08100c` | `hsl(150, 33%, 5%)` | Deep tactical black-green; primary viewport ground |
| `--color-bg-surface` | `#0d1511` | `hsl(150, 23%, 7%)` | Chassis panel ground; list row backgrounds |
| `--color-bg-elevated`| `#141d18` | `hsl(150, 16%, 10%)` | Interactive hover states, elevated control pods |
| `--color-border-subtle` | `#1c2821` | `hsl(150, 17%, 13%)` | Perimeter divider lines, chassis seams |
| `--color-border-medium` | `#2d3d33` | `hsl(150, 15%, 21%)` | Interactive borders, container framing |
| `--color-border-highlight`| `#3b4a41` | `hsl(150, 11%, 26%)` | Focused or active borders |
| `--color-text-primary` | `#f0fdf4` | `hsl(140, 60%, 97%)` | Headings, critical telemetry, primary copy |
| `--color-text-secondary`| `#bacbbe` | `hsl(135, 14%, 76%)` | Body narrative, technical descriptions |
| `--color-text-muted` | `#64746b` | `hsl(147, 8%, 43%)` | Micro-labels, serial numbers, metadata |
| `--color-signal-mint` | `#00e599` | `hsl(160, 100%, 45%)` | Filtered audio line, high-priority dataset badge |
| `--color-signal-cyan` | `#00e5ff` | `hsl(186, 100%, 50%)` | Audio capture, active selection, primary accent |
| `--color-signal-ai` | `#818cf8` | `hsl(234, 89%, 74%)` | YAMNet feature embedding, latent classification |
| `--color-warning-amber`| `#f59e0b` | `hsl(38, 92%, 50%)` | Impulsive noise tag, licensing warnings |
| `--color-threat-red` | `#ef4444` | `hsl(0, 84%, 60%)` | Extreme acoustic threat indicator |

---

## 3. Typography & Information Hierarchy

Typography is built on modern, razor-sharp geometric and monospaced typefaces imported via Google Fonts:
- **Display & Section Headers**: `Space Grotesk`, `Inter` (Weight: 700 / 800)
- **Body & Editorial Copy**: `Inter` (Weight: 400 / 500, line-height: 1.6)
- **Telemetry, Metrics & Technical Callouts**: `JetBrains Mono` / `ui-monospace` (Weight: 500 / 700, letter-spacing: 0.05em to 0.15em)

### Scale & Hierarchy:
- **Hero Title**: `48px` (Mobile) / `64px` (Tablet) / `76px` (Desktop), tracking-tighter, uppercase
- **Section Title (H2)**: `26px` (Mobile) / `34px` (Tablet) / `40px` (Desktop), uppercase
- **Subsection Title (H3)**: `18px` / `22px`, tracking-normal
- **Technical Micro-Label**: `11px` / `12px` Mono, tracking-widest, uppercase (`NOISELESS-X6 / RESEARCH DATA`)
- **Dataset Item Name**: `16px` / `17px`, font-semibold, tracking-tight
- **Body Regular**: `14px` / `15px`, leading-relaxed
- **Telemetry Readout**: `11px` / `12px` Mono, high contrast

---

## 4. Layout Architecture & Responsive Breakpoints

All sections adhere to a responsive grid system with maximum content width of `1280px` (`max-w-7xl`):
- **Desktop (`>= 1024px`)**:
  - Full-width interactive explorer with side-by-side filter controls and dataset list.
  - Slide-out detail drawer on the right (`w-[480px]`) preserving explorer visibility.
  - 2D engineering schematics with animated SVG signal pulses and node highlights.
- **Tablet (`768px – 1023px`)**:
  - High-density stacked layout with wrapped filter pills and condensed metadata columns.
  - Detail panel transitions to a bottom sheet or 85% width drawer.
- **Mobile (`< 768px`)**:
  - Full-width search bar and scrollable category chip bar.
  - Stacked dataset row cards with touch-friendly `OPEN ↗` tap targets (`min-h-[44px]`).
  - Zero horizontal overflow.

---

## 5. Component Specifications

### A. Navigation Bar (`Navbar`)
- Official NOISELESS-X6 brand mark + `NOISELESS-X6 / DATASET LIBRARY`.
- Direct jump anchors: `#datasets`, `#pipeline`, `#categories`, `#dataflow`, `#license`.
- Live index counter badge: `118 DATASETS INDEXED`.
- Search shortcut prompt (`⌘K` or `/` focus).

### B. Hero Section (`Hero` & `HeroStats`)
- Micro-label: `NOISELESS-X6 / RESEARCH DATA`
- Primary heading:
  ```text
  118 AUDIO DATASETS
  FOR ADAPTIVE NOISE CANCELLATION
  ```
- Subtitle: "An organized research library covering military audio, environmental noise, speech enhancement, sound events, machinery acoustics and acoustic-path simulation."
- Primary Action: `EXPLORE 118 DATASETS` (smooth scrolls to `#datasets`).
- Secondary Action: `VIEW RESEARCH PIPELINE` (smooth scrolls to `#pipeline`).
- Background: 2D Canvas animated audio frequency waveform with subtle green grid lines, labeled `ILLUSTRATIVE SIGNAL VISUALIZATION`.
- Hero Statistics row:
  - `118` — `DATASETS INDEXED`
  - `10` — `RESEARCH CATEGORIES`
  - `NOISE CLASSIFICATION` — `STATIONARY / NON-STATIONARY`
  - `SPEECH PROTECTION` — `VAD & HARMONIC PRESERVATION`
  - `ACOUSTIC SIMULATION` — `RIR & PATH MODELING`

### C. Dataset Overview (`DatasetOverview`)
- Heading: `THE DATA LIBRARY`
- Core statement explaining multi-domain acoustic collection.
- 2D SVG Data Processing Flow:
  `DATA SOURCES → AUDIO PROCESSING → FEATURE EXTRACTION → CLASSIFICATION → SPEECH PROTECTION → ADAPTIVE ANC`
  with smooth animated pulse travelling along connector paths.

### D. Research Pipeline Schematic (`ResearchPipeline`)
- Section heading: `HOW THE DATA SUPPORTS NOISELESS-X6`
- Interactive 2D engineering block diagram:
  - Input: Reference Microphone & Audio Acquisition
  - Stage 1: Preprocessing & STFT Analysis
  - Stage 2: YAMNet Feature Representation (1024-dim embedding)
  - Stage 3: Task-Specific Classifier (Stationary / Non-Stationary / Impulsive)
  - Stage 4: Voice Activity Detector (VAD) & Intelligent Controller
  - Stage 5: FxLMS / NLMS Adaptive Filter & Secondary Path Modeling
  - Output: Anti-Noise Speaker & Residual Error Microphone Feedback
- Interactive nodes showing which dataset categories map to each stage.

### E. Data Flow & Category Visualization (`DataFlowMatrix`)
- 2D visual explaining why different acoustic domains exist:
  - `MILITARY / DEFENCE` → Defence Noise (Jet engine, rotor blade, gunfire, armored vehicles)
  - `ENVIRONMENTAL NOISE` → Real-World Robustness (Urban, weather, transit, construction)
  - `MACHINERY / INDUSTRIAL` → Non-Stationary Audio (Pumps, bearings, fans, anomalous friction)
  - `CLEAN SPEECH` → VAD / Speech Protection (Voice preservation, formants)
  - `NOISY SPEECH` → Enhancement (Multi-speaker separation, speech-in-noise)
  - `ACOUSTIC / RIR` → Acoustic Path Simulation (Secondary path $S(z)$, room impulse response)

### F. Core Sources & Synthetic Construction (`CoreSources`)
- Highlights the authoritative high-relevance sources:
  MAD, Reduced MAD, AudioSet, FSD50K, ESC-50, UrbanSound8K, VGGSound, DEMAND, DNS Challenge, MUSAN, WHAM/WHAMR, MIMII/ToyADMOS, CHiME, LibriSpeech/VCTK/Common Voice/EARS, TAU-SRIR/6DOF-SRIR/METU/BUT ReverbDB.
- Recommended Synthetic Audio Construction Flow:
  `[Military / Environmental Noise] + [Clean Speech] + [RIR Path] → [Synthetic Noisy Speech] → [YAMNet Feature Extraction] → [Noise Classifier] → [VAD + Controller] → [FxLMS / NLMS]`

### G. Interactive Category Navigation (`DatasetCategories`)
- 10 Category Cards with dynamic counts computed directly from the dataset array:
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
- Clicking any card smoothly scrolls and activates that category filter in the explorer.

### H. Main Interactive Dataset Explorer (`DatasetExplorer`)
- Real-time client-side search input across Name, Category, Use, and Keywords.
- Category filter buttons (All + 10 categories).
- Use-Case dropdown (All, Noise Classification, Speech Protection, Speech Enhancement, Sound Event Detection, Machine Audio, Acoustic Simulation, General Audio).
- Sorting controls (Dataset ID, Name A-Z, Name Z-A, Category).
- Dynamic result counter: `118 DATASETS INDEXED` / `SHOWING 14 OF 118`.
- Deep linking: URL query params synchronization (`?search=`, `?category=`, `?use=`).
- Empty state: `NO DATASETS FOUND` with `RESET FILTERS` CTA.

### I. Dataset List & Rows (`DatasetList`, `DatasetRow`)
- Technical alternating rows:
  - Left column: Sequential numeric ID badge (`#01`, `#02` ... `#118`).
  - Middle column: Dataset Name, Category tag, Primary research use, Domain badge (`github.com`, `zenodo.org`, `kaggle.com`, etc.).
  - Right column: `OPEN DATASET ↗` button with external link attributes (`target="_blank" rel="noopener noreferrer"`).
- Micro-interactions: Subtle row elevation, border brightening (`border-emerald-500/40`), icon offset on hover.
- Keyboard accessible: Tab navigation, Enter to open details or URL.

### J. Dataset Detail Panel (`DatasetDetailPanel`)
- Flyout technical drawer with backdrop:
  - Header: Dataset ID badge, full dataset name, core source status.
  - Metadata grid: Category, Primary Use Case, Host Domain, Link Type.
  - Research Role: How this dataset is utilized in NOISELESS-X6.
  - Direct Action: Prominent `OPEN OFFICIAL DATASET ↗` button opening verified external URL in new tab.
  - Accessibility: `ESC` key to close, focus trap, ARIA dialog attributes.

### K. Licensing & Dataset Access Notice (`DatasetLicense`)
- Header: `DATASET ACCESS & LICENSING`
- Official disclaimer text regarding individual provider licenses, research reference status, YouTube-derived audio caveats (AudioSet/VGGSound), and commercial deployment precautions.

### L. Footer (`Footer`)
- NOISELESS-X6 branding.
- Telemetry: `118 DATASETS INDEXED // RESEARCH RESOURCE PORTAL`.
- Quick navigation links & SIH 2026 Defence & Aerospace project attribution.

---

## 6. Motion & Interaction System
- **Hero Waveform**: Horizontal 2D canvas sinusoidal wave synthesis with subtle harmonic noise modulation (0.015 phase speed).
- **Signal Pulse**: SVG dashoffset animation (2.4s loop) tracing signal paths between engineering blocks.
- **Drawer Slide**: 240ms ease-out translateX transition from right viewport edge.
- **Hover Micro-movements**: 2px translation on link icons, 150ms border-color transitions.
