/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 80px rgba(14, 165, 233, 0.18)",
      },
    },
  },
  plugins: [],
}

export default tailwindConfig;
