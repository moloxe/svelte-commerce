import { error } from '@sveltejs/kit';
import { products } from '$lib/data/products';
import slugify from 'slugify';
import type { PageServerLoadEvent } from './$types';

export function load({ params }: PageServerLoadEvent) {
	const filteredPoducts = products.filter((p) => slugify(p.category) === params.category);
	if (!filteredPoducts.length) return error(404);
	return { products: filteredPoducts };
}
