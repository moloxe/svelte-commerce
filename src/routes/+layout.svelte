<script lang="ts">
	import { onMount } from 'svelte';
	import ToggleThemeButton from '$lib/components/ToggleThemeButton.svelte';
	import { WEB_NAME, CONTACT_LINK, WEB_ICON } from '$lib/data/web-info';
	import '../app.css';

	export let data;

	$: categories = data.categories;
	$: curProductName = data.curProductName;
	$: curCategory = data.curCategory;
	$: curCategorySlug = data.curCategorySlug;

	onMount(() => {
		import('$lib/plugins');
	});
</script>

<svelte:head>
	<link
		rel="icon"
		href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${WEB_ICON}</text></svg>`}
	/>
	<title>
		{`${curProductName || curCategory ? `${curProductName ?? curCategory} | ` : ''}${WEB_NAME}`}
	</title>
</svelte:head>

<header
	class={`
		grid
		px-4 py-3 border-b
		grid-cols-[auto,1fr,auto]
		max-sm:grid-cols-[1fr,auto] max-sm:grid-rows-[auto,auto]
	`}
>
	<a class="text-2xl sm:mr-4 font-semibold w-fit" href="/">{WEB_NAME}</a>
	<div
		class="flex flex-wrap items-end max-sm:pt-2 max-sm:mt-2 max-sm:[grid-area:2/1/2/3] max-sm:border-t"
	>
		{#each categories as { category, categorySlug }}
			<a
				class={`underline mr-2 text-lg max-sm:text-base ${
					categorySlug === curCategorySlug ? 'bg-contrast text-primary font-semibold' : ''
				}`}
				href={`/${categorySlug}`}
			>
				{category}
			</a>
		{/each}
	</div>
	<ToggleThemeButton />
</header>

<slot />

<footer class="mt-auto text-sm text-disabled flex px-4 py-3 border-t justify-between">
	<a class="underline hover:text-contrast" href={CONTACT_LINK ?? '#'} target="_blank">
		{`🔗 ${WEB_NAME}`}
	</a>
	<p>
		Developed by <a class="underline hover:text-contrast" href="https://moloxe.io" target="_blank">
			moloxe.io
		</a>
	</p>
</footer>
