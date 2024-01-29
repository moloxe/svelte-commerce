import type { PartialProduct } from '../../types/product';

export const getPartialProducts = (): PartialProduct[] => [
	{
		name: 'Zapatillas nike',
		category: 'Calzado',
		description: `
- Zapatillas rápidas.
- A prueba de agua.
`,
		photos: ['/img/nike-1.jpg', '/img/nike-2.jpg'],
		price: `$200`
	},
	{
		name: 'Zapatillas',
		category: 'Calzado',
		description: `
- Zapatillas rápidas.
- A prueba de agua.
`,
		photos: ['/img/nike-2.jpg']
	},
	{
		name: 'Zapatillas adidas',
		category: 'Calzado',
		description: `
- Zapatillas rápidas.
- A prueba de agua.
`,
		photos: ['/img/adidas-1.jpeg', '/img/adidas-2.jpeg'],
		price: `$100 - $150`
	},
	{
		name: 'Polo',
		category: 'Polos',
		description: `
- Polo para ejercicios.
`,
		photos: ['/img/pantalon-1.jpeg', '/img/pantalon-2.jpeg'],
		price: `$80`
	},
	{
		name: 'Gorra blanca',
		category: 'Gorras',
		description: `
- Gorra 4k.
`,
		photos: ['/img/gorra-1.jpeg', '/img/gorra-2.jpeg'],
		price: `$15 - $20`
	}
];
