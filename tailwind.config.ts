import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			Poppins: 'Poppins',
  			sofiFont: [
  				'sofiFont'
  			]
  		},
  		backgroundImage: {
  			linearSofib: 'linear-gradient(90deg, #37B778 0%, #00AEEF 100%)',
  			linearSofig: 'linear-gradient(99.7deg, #37B778 0%, #206A45 100%)',
  			linearSofibb: 'linear-gradient(99.7deg, #00AEEF 0%, #0D5773 100%)',
  			linearHerosecation: 'linear-gradient(90deg, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0) 100%)',
  			linerSofib2: ' linear-gradient(90deg, #00AEEF 0%, #37B778 100%)'
  		},
  		backgroundColor: {
  			blueSofiB: 'rgba(0, 174, 239, 1)',
  			blueSofiB2: 'rgba(0, 174, 239, 0.6)',
  			whiteSofi: 'rgba(249, 247, 243, 1)',
  			greenCart: 'rgba(55, 183, 120, 0.15)',
  			blueCart: 'rgba(0, 174, 239, 0.15)',
  			violetCart: 'rgba(191, 34, 253, 0.15)',
  			categoriesB: 'rgba(249, 247, 243, 0.1)',
  			categoriesWhite: 'rgba(249, 247, 243, 1)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			greenSofic: 'rgba(55, 183, 120, 1)',
  			greenSofic2: 'rgba(55, 183, 120, 0.18)',
  			greenSofic3: 'rgba(55, 183, 120, 0.8)',
  			greenSofic4: 'rgba(55, 183, 120, 0.9)',
  			blueSofic4: 'rgba(0, 174, 239, 0.9)',
  			blueSofic: 'rgba(0, 174, 239, 1)',
  			blueSofic2: 'rgba(0, 174, 239, 0.18)',
  			blueSofic3: 'rgba(0, 174, 239, 0.8)',
  			violetCart: 'rgba(191, 34, 253, 1)',
  			colorCategorie: 'rgba(249, 247, 243, 0.4)',
  			colorChose: 'rgba(31, 31, 31, 0.2)',
  			colorChose2: 'rgba(249, 247, 243, 1)',
  			colorChose3: 'rgba(31, 31, 31, 0.5)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderColor: {
  			greenBorderSofi: 'rgba(55, 193, 120, 1)',
  			blueBorderSofi: 'rgba(0, 174, 239, 1)',
  			greenBorderSofi2: 'rgba(55, 203, 120, 0.8)',
  			chose3: 'rgba(31, 31, 31, 0.5)'
  		},
  		borderRadius: {
  			raduisSofi: '0 0 30px 30px  ',
  			raduisHeroSection: '0 0 40px 40px',
  			raduisCategories: '30px',
  			chose: '34px',
  			chose2: '50%',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		borderWidth: {
  			chose: '1px'
  		},
  		boxShadow: {
  			shadowSofi: '0px 6px 10px 0px rgba(0, 0, 0, 0.2)',
  			shadowCategorie: '0px 0px 30px 0px rgba(0, 0, 0, 0.08)',
  			shadowCategorie2: '0px 0px 16px 0px rgba(0, 0, 0, 0.2)',
  			custom: '0px 0px 300.7px rgba(0, 167, 157, 0.2)',
  			'custom-shadow': '0px 0px 42.1px 10px rgba(0, 0, 0, 0.07)'
  		},
  		width: {
  			widthCategorie: '55%'
  		},
  		fontSize: {
  			chose: '10px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
