import Fuse from 'fuse.js';

export function lazySearch<T>(data: T[], keys: string[], term: string) {
	const fuse = new Fuse(data, {
		keys
	});

	const indexes = fuse
		.search(term)
		.sort((a, b) => (a.score ?? 0) - (b.score ?? 0))
		.map((res) => res.refIndex);

	return indexes;
}
