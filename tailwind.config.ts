import type {Config} from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        orange_main: 'rgba(193, 49, 0, 1)',
        white_abs: 'rgba(255, 255, 255, 1)',
      },
      backgroundImage: {
        background_image: 'url(@/assets/background.jpeg)',
        background_image2: 'url(@/assets/background2.jpeg)',
        background_image2_08: 'url(@/assets/background2-08.jpeg)',
      },
      maxWidth: {
        picture: '31.25rem',
      },
      borderRadius: {
        xl_6: '3.75rem',
      },
      borderWidth: {
        5: '5px',
      },
      fontSize: {
        xl_6: '5.125rem',
      },
      lineHeight: {
        xl_6: '6.125rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
