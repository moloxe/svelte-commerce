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

<div class="grid max-sm:grid-cols-1 grid-cols-2">
	<GalleryInput bind:search {productNames} />
	{#each filteredProducts as product}
		<ProductCard {product} />
	{/each}
</div>
