import { products } from '$lib/data/products';

export async function load() {
	return { products };
}
