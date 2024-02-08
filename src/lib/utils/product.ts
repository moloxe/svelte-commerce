import type { Product } from '../../types/product';

export const parseProductPrice = (product: Product) => {
	if (!product.price) return '';
	if (product.price.amount) {
		return `${product.price.symbol} ${product.price.amount}`;
	}
	return `${product.price.symbol} ${product.price.minAmount} - ${product.price.maxAmount}`;
};
