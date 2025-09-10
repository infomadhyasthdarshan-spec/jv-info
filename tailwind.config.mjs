/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // ssr: ["myriad-devanagari"],
        // ssb: ["myriad-devanagari"],
        // th: ["myriad-devanagari"],
        // hi: ["myriad-devanagari"],
        // hr: ["myriad-devanagari"],
        // hr: ["TiroDevanagariHindi-Regular"],
        // ssr: ["SourceSerifPro-Regular"],
        // ssb: ["SourceSerifPro-Bold"],
        // hi: ["TiroDevanagariHindi-Italic"],
        // th: ["theinhardt-pan-regular"],
        italic: ["theinhardt-pan-italic"]
      },
    },
  },
  plugins: [],
};
