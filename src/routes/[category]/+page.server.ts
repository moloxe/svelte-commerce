import { error } from '@sveltejs/kit';
import slugify from 'slugify';
import type { PageServerLoadEvent } from './$types';
import { products } from '$lib/data/parsed-products';

export function load({ params }: PageServerLoadEvent) {
	const filteredPoducts = products.filter((p) => slugify(p.category) === params.category);
	if (!filteredPoducts.length) return error(404);
	return { products: filteredPoducts };
}
