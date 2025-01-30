import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ttWhite: 'rgb(250, 250, 250)',

        ttBlack: 'rgb(16, 18, 18)',
        ttLightBlack: `rgb(51, 51, 51)`,

        ttRed: 'rgb(255, 0, 0)',
        ttLightRed: 'rgb(255, 225, 225)',

        ttBlue: 'rgb(163, 255, 100)',

        ttGray: 'rgb(130, 130, 130)',
        ttLightGray: 'rgb(193, 193, 193)',
      },
    },
  },
  plugins: [],
} satisfies Config
