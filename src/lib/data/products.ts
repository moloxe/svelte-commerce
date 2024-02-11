import { marked } from 'marked';
import slugify from 'slugify';
import { CONTACT_PHONE } from './web-info';
import type { Product } from '../../types/product';

export const products: Product[] = [
	{
		name: 'Zapatillas nike',
		category: 'Calzado',
		descriptionMd: `
- Zapatillas rápidas.
- A prueba de agua.
`,
		photos: ['/img/nike-1.jpg', '/img/nike-2.jpg'],
		price: {
			amount: 200
		}
	},
	{
		name: 'Zapatillas',
		category: 'Calzado',
		descriptionMd: `
- Zapatillas rápidas.
- A prueba de agua.
`,
		photos: ['/img/nike-2.jpg']
	},
	{
		name: 'Zapatillas adidas',
		category: 'Calzado',
		descriptionMd: `
- Zapatillas rápidas.
- A prueba de agua.
`,
		photos: ['/img/adidas-1.jpeg', '/img/adidas-2.jpeg'],
		price: {
			minAmount: 100,
			maxAmount: 150
		}
	},
	{
		name: 'Polo',
		category: 'Polos',
		descriptionMd: `
- Polo para ejercicios.
`,
		photos: ['/img/pantalon-1.jpeg', '/img/pantalon-2.jpeg'],
		price: {
			amount: 80
		}
	},
	{
		name: 'Gorra blanca',
		category: 'Gorras',
		descriptionMd: `
- Gorra 4k.
`,
		photos: ['/img/gorra-1.jpeg', '/img/gorra-2.jpeg'],
		price: {
			minAmount: 15,
			maxAmount: 20
		}
	}
]
	.map(({ name, category, photos, descriptionMd, price }) => {
		const path = `/${slugify(category)}/${slugify(name)}`;
		const descriptionHtml = marked(descriptionMd) as string;
		const product: Product = {
			name,
			path,
			category,
			photos,
			descriptionMd,
			descriptionHtml,
			buyUrl: `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
				'Hola, quisiera consultar la disponibilidad de '
			)}${name}`
		};
		if (price)
			product.price = {
				...price,
				currency: 'USD',
				symbol: '$'
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
