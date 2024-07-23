/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#FC4747",
      "dark-blue": {
        DEFAULT: "#10141E",
        light: "#161D2F",
      },
      "greyish-blue": "#5A698F",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontSize: {
      "heading-l": ["32px"],
      "heading-m": ["24px"],
      "heading-s": ["24px"],
      "heading-xs": ["18px"],
      "body-m": ["15px"],
      "body-s": ["13px"],
    },
    textUnderlineOffset: {
      "primary-offset": "16px",
    },
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s linear infinite",
      },
    },
  },
  plugins: [],
};
