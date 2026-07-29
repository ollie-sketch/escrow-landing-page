/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dockyard-at-dusk palette — grounded in a real material world (weathered shipping
        // containers, oxidized steel, aged signage) rather than an abstract dark-UI theme.
        base: '#1D2926',       // deep weathered container green-black
        panel: '#242F2C',      // raised surface — slightly lighter container-paint tone
        panel2: '#2D3A36',     // secondary raised surface (hover/active states)
        line: '#3E4C46',       // hairline borders — worn container seam
        steel: '#6E8683',      // galvanized steel grey-green — secondary accent
        amber: '#BF5730',      // burnt rust-orange — primary accent, oxidized steel corners
        signal: '#C99A3E',     // aged brass-gold — sparing use, live/attention moments
        rust: '#8C4A3D',       // muted brick-red — risk indicators only, distinct from the accent
        moss: '#7C8F4E',       // faded stencil olive-green — escrow-safe / cleared indicators
        ink: '#EDE6D3',        // primary text — warm parchment, not stark white
        mute: '#9BAA9E',       // secondary/muted text — weathered sage-grey
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
