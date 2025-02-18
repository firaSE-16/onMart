/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
        keyframes: {
            fadeZoomIn: {
                '0%': { opacity: 0, transform: 'scale(1.1)' },
                '100%': { opacity: 1, transform: 'scale(1)' },
            },
            textSlideIn: {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
            },
        },
        animation: {
            fadeZoomIn: 'fadeZoomIn 1.5s ease-out',
            textSlideIn: 'textSlideIn 0.8s ease-out forwards',
        },
    },
},
  plugins: [],
}


 