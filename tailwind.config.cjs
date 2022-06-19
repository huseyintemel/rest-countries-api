const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
                'light-gray':'#fafafa',
				'dark-gray':"#858585",
				'dark-blue':"hsl(209, 23%, 22%)",
				'very-dark-blue':"hsl(207, 26%, 17%)"
            },
			fontFamily: {
                nunito: ['Nunito Sans', 'sans-serif'],
            },
		}
	},

	plugins: []
};

module.exports = config;
