import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ['Inter', 'sans-serif']
      },
      colors: {  
        // Custom colors  
        custom_black_1: '#1F2128',  
        custom_black_2: '#313442', 
        custom_black_3: '#151416',
        custom_green_1: '#50D1B2',  
        custom_red_1: '#F97066',
        custom_red_2: '#F04438',
        custom_red_3: '#EC3738', 
        custom_gray_1: '#7E7E8F',
        custom_gray_2: '#8B8B93',
        custom_orange_1: '#EC8C56',
        custom_purple_1: '#8758FF',
        custom_yellow_1: '#FFC43A',
        custom_blue_1: '#50D1B2',
        custom_blue_2: '#476CEC',
        custom_white_1: '#F1F1F1'
      }, 
      fontSize: {  
        small: ['14px', { lineHeight: '1.5', letterSpacing: '0' }],  
        medium: ['16px', { lineHeight: '1.5', letterSpacing: '0' }],  
        large: ['30px', { lineHeight: '1.5', letterSpacing: '0' }],  
      },  
      fontWeight: {  
        normal: '400',  
        medium: '600',  
        bold: '700',  
      },
    },
  },
  plugins: [],
} satisfies Config;
