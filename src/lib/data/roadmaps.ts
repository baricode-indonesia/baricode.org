export type TopicPriority = 'wajib' | 'direkomendasikan' | 'opsional';
export type RoadmapDifficulty = 'Pemula' | 'Menengah' | 'Lanjutan';

export interface RoadmapResource {
	title: string;
	url: string;
	isInternal?: boolean; // True jika mengarah ke artikel Baricode
}

export interface RoadmapTopic {
	id: string;
	title: string;
	description: string;
	priority: TopicPriority;
	keyPoints?: string[];
	resources?: RoadmapResource[];
	children?: RoadmapTopic[];
}

export interface RoadmapPhase {
	id: string;
	phaseNumber: number;
	title: string;
	subtitle: string;
	description: string;
	topics: RoadmapTopic[];
}

export type RoadmapStatus = 'tersedia' | 'segera_hadir';

export interface RoadmapItem {
	slug: string;
	order?: number;
	title: string;
	badge: string;
	tagline: string;
	description: string;
	status: RoadmapStatus;
	difficulty: RoadmapDifficulty;
	estimatedWeeks: string;
	category: string;
	iconName: string;
	updatedAt: string;
	phases: RoadmapPhase[];
}

// Mengimpor seluruh file JSON dari folder /src/content/roadmap/*.json secara dinamis
const rawRoadmapFiles = import.meta.glob('/src/content/roadmap/*.json', {
	eager: true,
	import: 'default'
}) as Record<string, RoadmapItem>;

export const roadmaps: RoadmapItem[] = Object.entries(rawRoadmapFiles)
	.map(([filepath, data]) => {
		const filename = filepath.split('/').pop()?.replace(/\.json$/, '') || '';
		return {
			...data,
			slug: data.slug || filename,
			phases: data.phases || []
		};
	})
	.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export function getRoadmapBySlug(slug: string): RoadmapItem | undefined {
	return roadmaps.find((r) => r.slug === slug);
}

export function getAllRoadmaps(): RoadmapItem[] {
	return roadmaps;
}
