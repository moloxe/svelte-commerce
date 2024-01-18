import type { Product } from '../../types/product';

export function getPriceFromProduct(product: Product) {
	if (product.price)
		if (product.price.current && new Date() < new Date(product.price.current.deadline))
			return `${product.price.currency} ${product.price.current.amount}`;
		else
			return `${product.price.currency} ${product.price.range.min} - ${product.price.currency} ${product.price.range.max}`;
	return undefined;
}

export function getDeadlineFromProduct(product: Product) {
	if (product.price?.current && new Date() < new Date(product.price.current.deadline))
		return new Date(product.price?.current?.deadline ?? 0).toLocaleDateString();
	return undefined;
}
