<script>
	import '../app.css';
	import theme from "$lib/stores.js";
	import { goto } from '$app/navigation';

	$: lightMode = $theme == 'light';

	function toggleDarkness(){
		lightMode ? theme.set('dark') : theme.set('light');
    }

	function goHome(){
		goto('/');
	}
</script>

<div class="bg-white text-black dark:bg-dark-blue dark:text-white px-8 lg:px-20 py-5 transition-colors duration-200"> 
	<div class="flex flex-row items-center justify-between"> 
		<h1 on:click={goHome} class="text-xl font-bold cursor-pointer">Where in the world?</h1>
		<button on:click={toggleDarkness} class="inline-flex items-center space-x-2">
			{#if lightMode}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
				</svg>
			{/if}    
			<span class="text-sm">{lightMode ? "Dark Mode" : "Light Mode"}</span>
		</button>   
	</div>
</div>
<slot />
