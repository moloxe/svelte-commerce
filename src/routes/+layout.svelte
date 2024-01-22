<script lang="ts">
	import '../app.css';
	import '../theme.css';
	import ToggleThemeButton from '$lib/components/ToggleThemeButton.svelte';
	import { WEB_NAME, CONTACT_LINK } from '$lib/data/web-info';
	export let data;
	$: categories = data.categories;
	$: curProductName = data.curProductName;
	$: curCategory = data.curCategory;
	$: curCategorySlug = data.curCategorySlug;
</script>

<svelte:head>
	<title>
		{`${curProductName || curCategory ? `${curProductName ?? curCategory} | ` : ''}${WEB_NAME}`}
	</title>
</svelte:head>

<header
	class={`
		grid grid-cols-[auto,1fr,auto] px-4 py-3 border-b
		max-sm:grid-cols-[1fr,auto] max-sm:grid-rows-[auto,auto]
		items-end justify-between
	`}
>
	<a class="text-2xl sm:mr-4 font-semibold w-fit" href="/">{WEB_NAME}</a>
	<div class="flex flex-wrap max-sm:mt-2 max-sm:[grid-area:2/1/2/3]">
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
