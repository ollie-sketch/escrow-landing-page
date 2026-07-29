/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core industrial palette — named tokens, used consistently across both pages
        base: '#17181A',       // primary background — warm near-black, not pure black
        panel: '#212326',      // raised surface (cards, nav)
        panel2: '#2A2D31',     // secondary raised surface (hover/active states)
        line: '#3A3E42',       // hairline borders, dividers, rivets
        steel: '#5B7A8C',      // muted steel-blue secondary accent
        amber: '#E8A33D',      // primary accent — CTAs, active states
        signal: '#F2C230',     // safety-yellow — sparing use, live/attention moments
        rust: '#B4543D',       // muted rust-red — used only for "direct payment" risk column
        moss: '#7FA37A',       // muted industrial green — escrow-safe / success indicators
        ink: '#ECE9E2',        // primary text — concrete off-white
        mute: '#9BA1A6',       // secondary/muted text
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
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
