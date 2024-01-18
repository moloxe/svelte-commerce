<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	export let data;
	$: products = data.products;
</script>

<Gallery {products} />
