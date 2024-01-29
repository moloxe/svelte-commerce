<script lang="ts">
	import Gallery from '$lib/components/Gallery/Gallery.svelte';
	export let data;
	$: products = data.products;
</script>

<Gallery {products} />
