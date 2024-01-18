import { products } from '$lib/data/products';
import slugify from 'slugify';
import type { LayoutServerLoadEvent } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export async function load({ params }: LayoutServerLoadEvent) {
	const repeatedCategories = products.flatMap(({ category }) => category);
	const categories = Array.from(new Set(repeatedCategories))
		.toSorted()
		.map((category) => ({
			category,
			categorySlug: slugify(category)
		}));
	const curProductName = products.find(({ name }) => params.name === slugify(name ?? ''))?.name;
	const curCategorySlug = params.category;
	const curCategory = categories.find(({ categorySlug }) => categorySlug === curCategorySlug)
		?.category;
	return { categories, curCategory, curCategorySlug, curProductName };
}
