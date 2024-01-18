<script lang="ts">
	import type { Product } from '../../types/product';
	import ProductCard from './ProductCard.svelte';

	export let products: Product[];
</script>

<div class="grid max-sm:grid-cols-1 grid-cols-2">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>
