module.exports = {
		purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    darkMode: false,
    theme: {
			colors: {
				gray: colors.blueGray,
				blue: colors.lightBlue
			},
      extend: {},
    },
    variants: {},
    plugins: [],
		use: {
  loader: 'babel-loader',
  options: { presets: [ '@babel/preset-react' ] }
}
};