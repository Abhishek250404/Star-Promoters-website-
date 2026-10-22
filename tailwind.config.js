export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
        heartbeat: {
          "0%,100%": {
            transform: "scale(1)",
          },
          "14%": {
            transform: "scale(1.15)",
          },
          "28%": {
            transform: "scale(1)",
          },
          "42%": {
            transform: "scale(1.15)",
          },
          "70%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        float: "float 2.8s ease-in-out infinite",
        heartbeat: "heartbeat 1.8s infinite",
      },
    },
  },
  plugins: [],
};