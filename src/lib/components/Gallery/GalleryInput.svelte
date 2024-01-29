<script lang="ts">
	import { onMount } from 'svelte';

	export let search: string;
	export let productNames: string[];
	let isCursorActive = false;
	let placeholder = '';

	onMount(() => {
		function getRandomName() {
			const randomIndex = Math.floor(Math.random() * productNames.length);
			return productNames[randomIndex] + '...';
		}
		if (!placeholder) {
			let progress = 0;
			let finalPlaceholder = getRandomName();
			let tempShowing = false;
			const start = Date.now();
			setInterval(() => {
				if (!placeholder.includes(finalPlaceholder)) {
					progress++;
				} else if (!tempShowing) {
					tempShowing = true;
					console.log('resetting');
					setTimeout(() => {
						progress = 0;
						placeholder = '';
						finalPlaceholder = getRandomName();
						tempShowing = false;
					}, 2000);
				}
				placeholder = finalPlaceholder.slice(0, progress);
				const time = Date.now() - start;
				const showCursor = time % 1000 < 500;
				placeholder += showCursor ? '|' : '';
			}, 100);
		}
	});
</script>

<input
	bind:value={search}
	on:focus={() => (isCursorActive = true)}
	on:blur={() => (isCursorActive = false)}
	placeholder={isCursorActive ? '' : placeholder}
	type="text"
	class="bg-primary outline-none p-4 text-2xl max-sm:[grid-area:1/1/1/2] [grid-area:1/1/1/3]"
/>
