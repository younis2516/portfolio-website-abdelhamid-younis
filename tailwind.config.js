/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // rgb(var(...) / <alpha-value>) lets Tailwind's opacity modifiers
        // (bg-paper/90, text-accent/30, ...) work correctly.
        paper: 'rgb(var(--paper-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        hairline: 'rgb(var(--hairline-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
      },
      fontFamily: {
        // Namespaced (not `sans`/`mono`) so this never overrides the
        // default Tailwind stack already used on other pages.
        display: ['var(--font-fraunces)', 'serif'],
        'ss-sans': ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'ss-mono': ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode:'class'
}
