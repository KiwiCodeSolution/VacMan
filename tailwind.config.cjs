/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        show: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slide: "slide 1s",
        show: "show 3s cubic-bezier(0.4, 0, 0.6, 1)",
      },
      colors: {
        "txt-main": "#5b5b69",
        "txt-black": "#040c0c",
        "txt-white": "#ffffff",
        "txt-grey": "#d9d9d9",
        "txt-darkgrey": "#646464",
        "txt-link": "#3ca4ec",
        "txt-blue": "#a9e2f0",
        "txt-orange": "#f0be6c",
        "bg-light": "#fffdf4",
        "bg-grey": "#646464",
        "bg-black": "#040c0c",
        "bg-blue": "#a9e2f0",
        "btn-grey": "#d9d9d9",
        "btn-black": "#040c0c",
        "btn-light": "#fffdf4",
        "app-red": "#f28b82",
        "app-blue": "#a9e2f0",
        "app-green": "#68efac",
        "app-pink": "#f4bcdc",
        "app-smoke": "#f4f4f4",
        "app-grey": "#9c9c9c",
        "app-yellow": "#fcfca4",
        "app-mustard": "#e1e433",
        "app-orange": "#f0be6c",
      },
    },
  },
  plugins: [],
};
