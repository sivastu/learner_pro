import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {

		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},

				// Homepage colors *************

				//nav bar colors
				navlogo: "#F9F9F9",
				navmenu: "#E1E1E1",
				navactive: "#F9F9F9",
				navbg: "#181714",

				//hero  section colors
				herotext: "#E9E9E9",
				herodesc: "#FFFFFF",
				herocount: "#F63633",
				heroccoundesc: "#FAFAFA",


				//codingballs
				codingballs: "#0F0F0F",
				codingtext: "#FAFAFA",

				// footer colors
				footerbg: "#0F0F0F",
				footerlogo: "#FFFFFF",
				footerinput: "#8B8989",

				//internShip Colors***************

				internherobg: "#000000",
				interndesc: "#BABABA",

				//important internship colors

				internheading: "#D2D2D2",
				interncard: "#2B2B2B",


			},


		},
		fontFamily: {
			"gilroy": "Gilroy-SemiBold",
			"publicalight": "PublicaSans-Light",
			"publicamedium": "PublicaSans-Medium",
			"publicaz": "ZPublicaSans",
			"publicbold": "PublicaSans-Bold",
			"prompt": "Prompt-SemiBold",
			"dmsans": "DMSans-Regular.ttf",
			"inter": "Inter-SemiBold"
		}
	},
};

export default config;


// style="background: linear-gradient(85.8deg, #FF3434 9.11%, rgba(255, 63, 52, 0.848958) 33.86%, rgba(255, 91, 51, 0.616348) 80.97%, rgba(255, 117, 52, 0.41) 127.28%, rgba(255, 125, 52, 0) 162.41%);"