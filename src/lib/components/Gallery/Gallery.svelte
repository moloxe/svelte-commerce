<script lang="ts">
	import { lazySearch } from '$lib/utils/search';
	import type { Product } from '../../../types/product';
	import ProductCard from '../ProductCard.svelte';
	import GalleryInput from './GalleryInput.svelte';

	export let products: Product[];

	function searchifyProduct({ category, description, name }: Product) {
		return {
			category,
			description,
			name
		};
	}

	const productNames = products.map((product) => product.name);

	let search = '';
	$: filteredIndexes = search ? lazySearch(products.map(searchifyProduct), search, 0.3) : null;
	$: filteredProducts = filteredIndexes
		? filteredIndexes.map((index) => products[index])
		: products;
</script>

<div class="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3">
	<GalleryInput
		customClass="max-sm:[grid-area:1/1/1/2] max-md:[grid-area:1/1/1/3] [grid-area:1/1/1/4]"
		bind:search
		{productNames}
	/>
	{#each filteredProducts as product}
		<ProductCard {product} />
	{/each}
	{#if filteredProducts.length === 0}
		<p
			class={`
			max-sm:[grid-area:2/1/2/2] [grid-area:2/1/2/4]
			text-center text-2xl border-t px-4 py-20
		`}
		>
			No se encontraron resultados.
		</p>
	{/if}
</div>
