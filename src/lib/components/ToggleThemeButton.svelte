<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let theme: 'dark' | 'light' = 'dark';
	$: if (theme) {
		if (browser) {
			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
				document.documentElement.classList.remove('light');
				document.documentElement.style.setProperty('color-scheme', 'dark');
			}
			if (theme === 'light') {
				document.documentElement.classList.add('light');
				document.documentElement.classList.remove('dark');
				document.documentElement.style.setProperty('color-scheme', 'light');
			}
		}
	}
	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.theme = theme;
	}

	onMount(async () => {
		if (localStorage.theme) theme = localStorage.theme;
		else if (
			!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			theme = 'dark';
		} else {
			theme = 'light';
		}
	});
</script>

<button
	class="grid justify-center items-center w-min"
	on:click={toggleTheme}
	title={theme === 'dark' ? 'Make light' : 'Make dark'}
>
	{theme === 'dark' ? '⚪' : '⚫'}
</button>
