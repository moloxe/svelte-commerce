import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { products } from '$lib/data/parsed-products';

export async function load({ params }: PageServerLoadEvent) {
	const { category, name } = params;
	const path = `/${category}/${name}`;
	const product = products.find((p) => p.path === path);
	if (!product) return error(404);
	return { product };
}
