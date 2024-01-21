import { PUBLIC_CONTACT_PHONE } from '$env/static/public';
import { marked } from 'marked';
import slugify from 'slugify';
import type { Product } from '../../types/product';
import { getPartialProducts } from './partial-products';

export const products: Product[] = getPartialProducts()
	.map((p) => {
		const path = `/${slugify(p.category)}/${slugify(p.name)}`;
		const description = marked(p.description) as string;
		const product = {
			...p,
			path,
			buyUrl: `https://wa.me/${PUBLIC_CONTACT_PHONE}?text=${encodeURIComponent(
				'Hola, quisiera consultar la disponibilidad de '
			)}${p.name}`,
			description
		};
		return product;
	})
	.toSorted((p1, p2) => {
		if (p1.price && p2.price) {
			return p1.name.localeCompare(p2.name);
		}
		if (p1.price) return -1;
		if (p2.price) return 1;
		return p1.name.localeCompare(p2.name);
	});
