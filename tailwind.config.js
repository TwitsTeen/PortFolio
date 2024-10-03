import { faBatteryQuarter } from "@fortawesome/free-solid-svg-icons";
import { Terser } from "vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkbeige: "#DDBEA8",
      beige: "#F3DFC1",
      purple: "#160F29",
      darkcyan: "#246A73",
      cyan: "#368F8B",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
