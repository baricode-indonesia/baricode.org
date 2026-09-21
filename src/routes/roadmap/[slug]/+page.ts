import { error } from '@sveltejs/kit';
import { getRoadmapBySlug, roadmaps } from '$lib/data/roadmaps';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return roadmaps.map((r) => ({ slug: r.slug }));
};

export const load: PageLoad = async ({ params }) => {
	const roadmap = getRoadmapBySlug(params.slug);

	if (!roadmap) {
		error(404, `Roadmap dengan slug "${params.slug}" tidak ditemukan.`);
	}

	return {
		roadmap
	};
};
