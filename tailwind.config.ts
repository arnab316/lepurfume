import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        cream: '#f7f5ef',
        smoke: '#515151',
        ash: '#b8b8b8',
        haze: '#d9d9d9',
        sand: '#dccfb9',
        sky: '#d2e6f9',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        tight2: '-0.02em',
        tight3: '-0.03em',
        tight5: '-0.05em',
      },
    },
  },
  plugins: [],
}

export default config
