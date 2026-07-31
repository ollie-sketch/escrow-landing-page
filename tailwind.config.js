/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dockyard palette — same real-world reference (weathered shipping containers,
        // oxidized steel, aged signage) rendered as daytime (light, default) or dusk (dark).
        // Values are CSS variables so both themes reuse the same class names everywhere.
        base: 'rgb(var(--color-base) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        panel2: 'rgb(var(--color-panel2) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        steel: 'rgb(var(--color-steel) / <alpha-value>)',
        amber: 'rgb(var(--color-amber) / <alpha-value>)',
        signal: 'rgb(var(--color-signal) / <alpha-value>)',
        rust: 'rgb(var(--color-rust) / <alpha-value>)',
        moss: 'rgb(var(--color-moss) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        mute: 'rgb(var(--color-mute) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"Courier Prime"', 'monospace'], // typewriter/ledger feel — customs paperwork, not a generic dev-mono
      },
      backgroundImage: {
        crate:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 14px)',
      },
      keyframes: {
        'crate-move': {
          '0%': { left: '2%' },
          '100%': { left: '84%' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'crate-move': 'crate-move 6s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
