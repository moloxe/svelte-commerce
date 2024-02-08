<script lang="ts">
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import { parseProductPrice } from '$lib/utils/product.js';
	export let data;
	$: product = data.product;
	let photos = data.product.photos;
	$: schema = JSON.stringify({
		'@context': 'http://schema.org/',
		'@type': 'Product',
		name: product.name,
		image: photos[0],
		description: product.description,
		category: product.category,
		offers: {
			'@type': 'Offer',
			priceCurrency: product.price?.currency,
			highPrice: product.price?.maxAmount,
			lowPrice: product.price?.minAmount,
			price: product.price?.amount
		}
	});
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta name="description" content={`${product.name} | ${product.category}`} />
	{@html `<script type="application/ld+json">${schema}</script>`}
</svelte:head>

<div class="relative flex max-sm:flex-col-reverse">
	<div class="flex-[4]">
		<PhotoGallery {photos} />
	</div>
	<div class="flex-[3]">
		<div class="flex flex-col sm:sticky top-0 p-4 h-fit">
			<span class="text-disabled">{product.category}</span>
			<h1>{product.name}</h1>
			{#if product.price}
				<p>
					{parseProductPrice(product)}
				</p>
			{/if}
			<div class="my-4">{@html product.description}</div>
			<a
				class="flex overflow-hidden justify-center bg-contrast text-primary text-xl font-bold"
				href={product.buyUrl}
				target="_blank"
			>
				<p
					class="p-4 text-center w-full h-full transition duration-300 ease-in-out hover:scale-110"
				>
					Consultar
				</p>
			</a>
			<span class="text-sm text-disabled mt-1">*Precio referencial, consultar disponibilidad.</span>
		</div>
	</div>
</div>
