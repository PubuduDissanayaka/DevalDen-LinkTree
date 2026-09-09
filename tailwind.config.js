// Deval Den LinkTree — Tailwind theme (mirrors the previous inline Play-CDN config).
// Rebuild styles after editing markup:
//   npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind-input.css -o assets/styles.css --content ./index.html --minify
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0c0705',
          dark: '#140906',
          surface: '#1c0f0a',
          card: '#24140d',
          gold: '#f59e0b',
          goldLight: '#fbbf24',
          red: '#e11d48',
          crimson: '#b91c1c',
          fire: '#ea580c',
          orange: '#f97316'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'flame-glow': 'flameGlow 3s ease-in-out infinite alternate',
        'spark-drift': 'sparkDrift 4s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' }
        },
        flameGlow: {
          // opacity-only pulse so it never overrides the centering translate on the same element
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' }
        },
        sparkDrift: {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '30%': { opacity: '0.8' },
          '80%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-120px) translateX(25px)', opacity: '0' }
        }
      }
    }
  }
};
