/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tac: {
          base: '#08100c',
          surface: '#0d1511',
          elevated: '#141d18',
          card: '#0f1813',
          border: {
            subtle: '#1c2821',
            medium: '#2d3d33',
            highlight: '#3b4a41',
          }
        },
        signal: {
          mint: '#00e599',
          cyan: '#00e5ff',
          ai: '#818cf8',
          amber: '#f59e0b',
          red: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'signal-flow': 'signalFlow 3s linear infinite',
      },
      keyframes: {
        signalFlow: {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
