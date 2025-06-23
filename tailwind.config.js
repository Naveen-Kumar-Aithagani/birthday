/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'twinkle': 'twinkle 2s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        twinkle: {
          '0%': {
            opacity: '0.3',
            transform: 'scale(0.8)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1.2)'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
        wave: {
          '0%, 100%': {
            transform: 'translateX(0px)'
          },
          '50%': {
            transform: 'translateX(10px)'
          },
        },
      },
      backgroundImage: {
        'magical-gradient': 'linear-gradient(45deg, #FFD700, #FF6B35, #F7931E, #FFD700)',
        'ocean-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'aladdin-gradient': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)',
        'glow-lg': '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)',
      },
    },
  },
  plugins: [],
} 