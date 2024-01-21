import { products } from '$lib/data/parsed-products';

export async function load() {
	return { products };
}
