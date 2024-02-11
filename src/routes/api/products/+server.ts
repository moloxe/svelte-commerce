import { products } from '$lib/data/products';

export const prerender = true;

export async function GET() {
	return new Response(JSON.stringify({ products }), {
		headers: {
			'content-type': 'application/json'
		}
	});
}
