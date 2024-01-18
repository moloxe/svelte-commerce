export type Product = {
	name: string;
	category: string;
	description: string;
	photos: string[];
	path: string;
	buyUrl: string;
	price?: {
		currency: string;
		range: {
			min: number;
			max: number;
		};
		current?: {
			amount: number;
			deadline: string;
		};
	};
};
