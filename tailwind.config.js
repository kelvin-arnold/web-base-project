module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		container: {
			center: true,
		},
		fontFamily: {},
		colors: {
			transparent: "transparent",
			primary: {
				light: "#EC802C",
				DEFAULT: "#EC6E0C",
				dark: "#C65C0A",
			},
			secondary: {
				DEFAULT: "#F49E00",
			},
			gray: {
				light: "#5B5B5F",
				DEFAULT: "#3C393C",
				dark: "#1A171B",
			},
			white: {
				DEFAULT: "#FFFFFF",
			},
			red: {
				light: "#D9003C",
				DEFAULT: "#BB0034",
			},
			citrine: {
				DEFAULT: "#F9EDD3",
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
