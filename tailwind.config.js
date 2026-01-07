/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#0f172a', // Slate 900
                secondary: '#334155', // Slate 700
                accent: {
                    DEFAULT: '#0ea5e9', // Sky 500
                    hover: '#0284c7', // Sky 600
                },
                surface: '#ffffff',
                background: '#f8fafc', // Slate 50
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
            },
            keyframes: {
                'fade-in': {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                'slide-up': {
                    'from': { transform: 'translateY(20px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
};
