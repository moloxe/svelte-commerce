<script lang="ts">
	import type { Product } from '../../types/product';
	export let product: Product;
</script>

<a class="relative flex overflow-hidden h-96" href={product.path}>
	<img
		class="h-auto w-full object-cover transition duration-300 ease-in-out hover:scale-110 focus:scale-110"
		src={product.photos[0]}
		alt="product"
	/>
	<div class="absolute top-0 right-0 flex flex-col items-end text-contrast">
		<p class="bg-primary py-1 px-2 w-fit">{product.name}</p>
		{#if product.price}
			<p class="bg-primary py-1 px-2 w-fit">
				{product.price}
			</p>
		{/if}
	</div>
</a>
