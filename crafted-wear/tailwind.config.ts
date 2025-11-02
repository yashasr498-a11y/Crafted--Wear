+import type { Config } from "tailwindcss";

+

+const config: Config = {

+  content: [

+    "./pages/**/*.{js,ts,jsx,tsx,mdx}",

+    "./components/**/*.{js,ts,jsx,tsx,mdx}",

+    "./app/**/*.{js,ts,jsx,tsx,mdx}",

+  ],

+  theme: {

+    extend: {

+      colors: {

+        gold: {

+          50: "#fdfbf7",

+          100: "#faf6ed",

+          200: "#f4ead2",

+          300: "#edddb7",

+          400: "#e0c481",

+          500: "#d4ab4b",

+          600: "#bf9a44",

+          700: "#9f8039",

+          800: "#80662e",

+          900: "#685326",

+        },

+        noir: {

+          50: "#f6f6f6",

+          100: "#e7e7e7",

+          200: "#d1d1d1",

+          300: "#b0b0b0",

+          400: "#888888",

+          500: "#6d6d6d",

+          600: "#5d5d5d",

+          700: "#4f4f4f",

+          800: "#454545",

+          900: "#0a0a0a",

+          950: "#050505",

+        },

+      },

+      fontFamily: {

+        display: ["var(--font-playfair)", "serif"],

+        sans: ["var(--font-inter)", "sans-serif"],

+      },

+      backgroundImage: {

+        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

+        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

+        "marble-dark": "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.05\"/%3E%3C/svg%3E')",

+      },

+      animation: {

+        "float": "float 6s ease-in-out infinite",

+        "glow": "glow 2s ease-in-out infinite alternate",

+        "shimmer": "shimmer 2.5s linear infinite",

+      },

+      keyframes: {

+        float: {

+          "0%, 100%": { transform: "translateY(0px)" },

+          "50%": { transform: "translateY(-20px)" },

+        },

+        glow: {

+          "0%": { boxShadow: "0 0 20px rgba(212, 171, 75, 0.3)" },

+          "100%": { boxShadow: "0 0 40px rgba(212, 171, 75, 0.6)" },

+        },

+        shimmer: {

+          "0%": { backgroundPosition: "-1000px 0" },

+          "100%": { backgroundPosition: "1000px 0" },

+        },

+      },

+    },

+  },

+  plugins: [],

+};

+

+export default config;
