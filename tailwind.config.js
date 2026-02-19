/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                clover: {
                    primary: "#2F7D32",
                    dark: "#1B5E20",
                    light: "#EAF6EA",
                },
                text: "#111827",
                subtext: "#4B5563",
                border: "#E5E7EB",
                surface: "#FFFFFF",
                muted: "#F9FAFB",
            },
            fontFamily: {
                sans: ['"Noto Sans JP"', 'sans-serif'],
            },
            maxWidth: {
                'container': '72rem',
            },
            borderRadius: {
                'card': '1rem',
                'btn': '0.75rem',
            },
            animation: {
                "fade-in": "fade-in 0.6s ease-out",
                "slide-in": "slide-in 0.3s ease-out",
                "loop-scroll": "loop-scroll 30s linear infinite",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: 0, transform: "translateY(10px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" }
                },
                "slide-in": {
                    "0%": { transform: "translateY(-10px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 }
                },
                "loop-scroll": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
