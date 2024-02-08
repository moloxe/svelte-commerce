import slugify from 'slugify';
import type { LayoutServerLoadEvent } from './$types';
import { products } from '$lib/data/products';
import { categories } from '$lib/data/categories-from-products';

export const prerender = true;
export const trailingSlash = 'always';

export async function load({ params }: LayoutServerLoadEvent) {
	const curProductName = products.find(({ name }) => params.name === slugify(name ?? ''))?.name;
	const curCategorySlug = params.category;
	const curCategory = categories.find(
		({ categorySlug }) => categorySlug === curCategorySlug
	)?.category;
	return { categories, curCategory, curCategorySlug, curProductName };
}
