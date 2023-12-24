/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./docs/**/*.{html,js}"],
	theme: {
		extend: {
			animation: {
				"infinite-scroll": "infinite-scroll 25s linear infinite",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [],
};

// npx tailwindcss -i ./docs/input.css -o ./docs/output.css --watch
