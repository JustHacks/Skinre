module.exports = {
		purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    darkMode: false,
    theme: {
			colors: {
				
                pink: 'var(--pink)',
                yellow: 'var(--yellow)',
                dark: 'var(--dark)',
                card: 'var(--card)',
                gradientColorStops: 'var(--gradient)',
				white: 'var(--white)',
				borderGray: 'var(--bordergray)',
				blueGray: 'var(--blueGray)',
			},

    extend: {},
    },
    variants: {
			scrollbar: ['rounded']
		},
    plugins: [
			require('tailwind-scrollbar')
		],
};