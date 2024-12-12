/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    extend: {
      backgroundImage: {
        'login-pattern': 'url("src/assets/plus-pattern.svg")',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        blue: {
          50: '#f1f7ff',
          100: '#e5eeff',
          200: '#cee0ff',
          300: '#a7c5ff',
          400: '#769eff',
          500: '#3f6dff',
          600: '#1842ff',
          700: '#0734fa',
          800: '#052bd2',
          900: '#0625ac',
          950: '#001970',
        },
        gold: {
          50: '#ffffe7',
          100: '#ffffc1',
          200: '#fffb86',
          300: '#fff041',
          400: '#ffe00d',
          500: '#ffd100',
          600: '#d19900',
          700: '#a66d02',
          800: '#89550a',
          900: '#74450f',
          950: '#442404',
        },
        red: {
          50: '#fff0f1',
          100: '#ffe1e4',
          200: '#ffc8cf',
          300: '#ff9ba8',
          400: '#ff637b',
          500: '#ff2c51',
          600: '#f6083b',
          700: '#c3002f',
          800: '#ae0331',
          900: '#940732',
          950: '#530016',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
