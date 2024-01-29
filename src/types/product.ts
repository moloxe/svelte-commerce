export type Product = {
	name: string;
	category: string;
	description: string;
	photos: string[];
	path: string;
	buyUrl: string;
	price?: string;
};

export type PartialProduct = Pick<
	Product,
	'name' | 'category' | 'description' | 'photos' | 'price'
>;
