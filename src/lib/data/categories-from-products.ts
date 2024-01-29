import slugify from 'slugify';
import { products } from './parsed-products';

const repeatedCategories = products.flatMap(({ category }) => category);
export const categories = Array.from(new Set(repeatedCategories))
	.toSorted()
	.map((category) => ({
		category,
		categorySlug: slugify(category)
	}));
