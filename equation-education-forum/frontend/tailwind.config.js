// frontend/tailwind.config.js



module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust to match your project structure
  theme: {
      extend: {
          keyframes: {
              slideInLeft: {
                  '0%': { opacity: '0', transform: 'translateX(-100%)' },
                  '100%': { opacity: '1', transform: 'translateX(0)' },
              },
              slideInRight: {
                  '0%': { opacity: '0', transform: 'translateX(100%)' },
                  '100%': { opacity: '1', transform: 'translateX(0)' },
              },
          },
          animation: {
              'slide-in-left': 'slideInLeft 1s ease-out',
              'slide-in-right': 'slideInRight 1s ease-out',
          },
      },
  },
  plugins: [],
};

