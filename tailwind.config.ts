import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Apercu", "sans-serif"], // 디폴트 폰트 설정!
    },
    extend: {},
  },
  plugins: [],
};
export default config;
