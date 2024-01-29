function jaccardSimilarity(str1: string, str2: string) {
	const set1 = new Set(str1);
	const set2 = new Set(str2);
	const intersection = new Set([...set1].filter((x) => set2.has(x)));
	const union = new Set([...set1, ...set2]);
	return intersection.size / union.size;
}

export function lazySearch(data: { [key: string]: string }[], term: string, gap: number) {
	const lowerTerm = term.toLowerCase();

	const indexes = data
		.map((object, index) => {
			let maxSimilitud = 0;
			for (const prop in object) {
				const similitud = jaccardSimilarity(lowerTerm, object[prop].toString().toLowerCase());
				maxSimilitud = Math.max(maxSimilitud, similitud);
			}
			return {
				index,
				maxSimilitud
			};
		})
		.toSorted((a, b) => b.maxSimilitud - a.maxSimilitud)
		.filter((similitud) => similitud.maxSimilitud > gap)
		.map((similitud) => similitud.index);

	return indexes;
}
