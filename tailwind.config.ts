import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: { colors: { dark: "#2b2b2b" } },
  },
  plugins: [
    require("@tailwindcss/typography")({ className: "typography" }),
    require("@tailwindcss/container-queries"),
    require("@headlessui/tailwindcss"),
  ],
};
export default config;
