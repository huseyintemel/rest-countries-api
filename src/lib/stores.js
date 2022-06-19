import { writable } from 'svelte/store';
import { browser } from '$app/env';

let theme;

if (browser) {
	const storedTheme = localStorage.getItem('theme');
	theme = writable(storedTheme);

	theme.subscribe((value) => {
		if (value === 'dark') {
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	});
}

export default theme;