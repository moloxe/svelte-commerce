export type Product = {
	name: string;
	category: string;
	descriptionMd: string;
	descriptionHtml: string;
	photos: string[];
	path: string;
	buyUrl: string;
	price?: {
		currency: string;
		symbol: string;
		amount?: number;
		minAmount?: number;
		maxAmount?: number;
	};
};
