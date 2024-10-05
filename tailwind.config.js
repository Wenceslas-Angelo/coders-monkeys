/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: {
        200: "#cfeffc",
        300: "#cfd8f6",
        400: "#7f85e8",
        DEFAULT: "#5f62e2",
        600: "#5658cb",
      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe3de",
        400: "#56c4a7",
        DEFAULT: "#2ab691",
        600: "#26a482",
      },
      gray: {
        200: "#f5f5f5",
        300: "#e5e5e5",
        400: "#cccccc",
        500: "#999999",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        DEFAULT: "#1d1d1d",
      },
    },
    fontSize: {
      "8xl": [
        "120px",
        {
          lineHeight: "120px",
          letterSpacing: "-6px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "72px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "55px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "48px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.6px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.1px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: [
        "21px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.01px",
          fontWeight: "400",
        },
      ],
      base: [
        "17px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.7px",
          fontWeight: "400",
        },
      ],
      sm: [
        "15px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      base: [
        "17px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.7px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "18px",
        {
          lineHeight: "18pxpx",
          letterSpacing: "-0.3px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "16px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
          fontWeight: "400",
        },
      ],
    },
    borderRadius: {
      DEFAULT: "10px",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
