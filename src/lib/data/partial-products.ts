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
		price: {
			currency: '$',
			range: {
				min: 200,
				max: 200
			},
			current: {
				amount: 200,
				deadline: '2024-06-06'
			}
		}
	},
	{
		name: 'Zapatillas adidas',
		category: 'Calzado',
		description: `
- Zapatillas rápidas.
- A prueba de agua.
`,
		photos: ['/img/adidas-1.jpeg', '/img/adidas-2.jpeg'],
		price: {
			currency: '$',
			range: {
				min: 100,
				max: 150
			}
		}
	},
	{
		name: 'Polo',
		category: 'Polos',
		description: `
- Polo para ejercicios.
`,
		photos: ['/img/pantalon-1.jpeg', '/img/pantalon-2.jpeg'],
		price: {
			currency: '$',
			range: {
				min: 80,
				max: 80
			},
			current: {
				amount: 80,
				deadline: '2024-06-06'
			}
		}
	},
	{
		name: 'Gorra blanca',
		category: 'Gorras',
		description: `
- Gorra 4k.
`,
		photos: ['/img/gorra-1.jpeg', '/img/gorra-2.jpeg'],
		price: {
			currency: '$',
			range: {
				min: 15,
				max: 20
			}
		}
	}
];
