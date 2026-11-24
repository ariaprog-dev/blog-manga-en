import type { CollectionEntry } from 'astro:content';

export type GuideId = 'demographics' | 'editions' | 'bluray-regions' | 'buying-care';

export interface GuideMeta {
	id: GuideId;
	href: string;
	icon: string;
	title: string;
	shortTitle: string;
	badge: string;
	description: string;
	summary: string;
	readingMinutes: number;
	keywords: string[];
	preferredSlugs: string[];
}

export interface RecommendedGuideLink {
	href: string;
	icon: string;
	label: string;
	title: string;
	description: string;
}

export const GUIDE_HUB = {
	href: '/guide/',
	title: "Japanese Manga & Anime Collector's Guide",
	description:
		'Essential collector reference covering Shonen vs Seinen demographics, English Deluxe vs Omnibus vs Box Set editions, Blu-ray/4K UHD region codes, and importing or preserving print volumes.',
};

export const GUIDE_PAGES: GuideMeta[] = [
	{
		id: 'demographics',
		href: '/guide/demographics/',
		icon: '🌌',
		title: 'Shonen vs Seinen & Classic Manga Guide',
		shortTitle: 'Demographics & Classics',
		badge: 'Discovery',
		description:
			'Understand Japanese magazine demographics (Shonen, Seinen, Shojo, Josei), right-to-left reading flow, and how to discover visionary Sci-Fi and Dark Fantasy masterworks.',
		summary:
			'Look past surface demographic labels toward bold world-building, speculative concepts, and timeless storytelling craft across eras.',
		readingMinutes: 6,
		keywords: [
			'seinen',
			'shonen',
			'sci-fi',
			'fantasy',
			'dystopia',
			'psychological',
			'urasawa',
			'nihei',
			'asano',
			'miura',
			'masterpieces',
			'underrated',
			'dorohedoro',
			'delicious-in-dungeon',
		],
		preferredSlugs: [
			'best-seinen-manga-collector-guide',
			'underrated-manga-masterpieces-collectors-guide',
			'pluto-naoki-urasawa-manga-review-collectors-guide',
			'parasyte-manga-full-color-collection-review',
			'delicious-in-dungeon-manga-review-collectors-guide',
			'dorohedoro-manga-complete-collectors-guide',
			'goodnight-punpun-collectors-review-inio-asano',
			'kagurabachi-volume-1-collectors-guide-dark-shonen',
		],
	},
	{
		id: 'editions',
		href: '/guide/editions/',
		icon: '📐',
		title: 'Manga Editions: Deluxe vs Box Sets',
		shortTitle: 'Deluxe, Perfect & Box Sets',
		badge: 'Formats',
		description:
			'Compare English tankobon singles, 2-in-1/3-in-1 omnibuses, Perfect Editions, Master Editions, oversized leatherette Deluxe hardcovers, and Complete Box Sets.',
		summary:
			'Evaluate trim size, paper stock, binding durability, color inserts, and shelf weight before investing in a multi-volume collection.',
		readingMinutes: 7,
		keywords: [
			'deluxe',
			'hardcover',
			'perfect-edition',
			'master-edition',
			'all-in-one',
			'box-set',
			'full-color',
			'edition',
			'collector',
			'omnibus',
			'berserk',
			'vinland',
			'blame',
			'nausicaa',
			'abara',
		],
		preferredSlugs: [
			'berserk-deluxe-edition-review-kentaro-miura',
			'vinland-saga-deluxe-hardcover-collectors-review',
			'blame-master-edition-collectors-review-guide',
			'nausicaa-of-the-valley-of-the-wind-deluxe-edition-review',
			'blade-of-the-immortal-deluxe-edition-review',
			'monster-perfect-edition-manga-review-collectors-guide',
			'20th-century-boys-perfect-edition-review',
			'abara-deluxe-edition-hardcover-tsutomu-nihei-review',
		],
	},
	{
		id: 'bluray-regions',
		href: '/guide/bluray-regions/',
		icon: '🎬',
		title: 'Anime Blu-ray, 4K UHD & Region Guide',
		shortTitle: 'Blu-ray, 4K & Regions',
		badge: 'Home Video',
		description:
			'Check DVD Region 1/2 limits, Blu-ray Region A compatibility between North America and Japan, region-free 4K Ultra HD specs, and English subtitle verification before importing.',
		summary:
			'Avoid unplayable discs or missing English subtitles by checking region encoding, upscaling vs native restoration, and collector box specifications.',
		readingMinutes: 6,
		keywords: [
			'blu-ray',
			'bluray',
			'4k',
			'uhd',
			'anime',
			'movie',
			'series',
			'ergo-proxy',
			'lain',
			'psycho-pass',
			'ghost-in-the-shell',
			'steins-gate',
			'akira',
			'space-brothers',
			'retro',
		],
		preferredSlugs: [
			'akira-4k-ultra-hd-blu-ray-collectors-edition-review',
			'ghost-in-the-shell-stand-alone-complex-blu-ray-box-review',
			'ergo-proxy-anime-review-philosophical-dystopia',
			'serial-experiments-lain-collectors-guide-review',
			'steins-gate-complete-series-blu-ray-collectors-guide',
			'psycho-pass-complete-season-blu-ray-collectors-deep-dive',
			'best-classic-90s-anime-movies-collectors-guide',
			'unearthing-gems-classic-retro-anime-collectors-guide',
		],
	},
	{
		id: 'buying-care',
		href: '/guide/buying-care/',
		icon: '📦',
		title: 'How to Import & Preserve Japanese Manga',
		shortTitle: 'Importing & Shelf Care',
		badge: 'Collecting',
		description:
			'Decide between digital sampling and owning print runs of your true favorites, ship safely via Amazon Japan, verify Kindle JP rules, and prevent yellowing or spine wear.',
		summary:
			'Practical sourcing tips for global readers alongside honest physical vs digital workflows and UV/humidity protection for long-term print shelves.',
		readingMinutes: 6,
		keywords: [
			'box-set',
			'box',
			'collection',
			'buying',
			'complete',
			'attack-on-titan',
			'one-piece',
			'chainsaw-man',
			'claymore',
			'demon-slayer',
			'death-note',
			'jujutsu-kaisen',
			'spy-x-family',
			'blue-lock',
		],
		preferredSlugs: [
			'one-piece-manga-box-sets-collectors-guide',
			'attack-on-titan-manga-box-set-review',
			'claymore-complete-manga-box-set-collectors-guide-dark-fantasy',
			'chainsaw-man-manga-box-set-review',
			'demon-slayer-manga-series-collectors-guide-editions',
			'death-note-all-in-one-edition-review-collectors-guide',
			'jujutsu-kaisen-manga-collection-review-collectors-guide',
			'spy-x-family-manga-review-buying-guide',
		],
	},
];

export const GUIDE_PAGE_MAP: Record<GuideId, GuideMeta> = Object.fromEntries(
	GUIDE_PAGES.map((g) => [g.id, g])
) as Record<GuideId, GuideMeta>;

const EDITIONS_TEXT_RE =
	/(?:deluxe|perfect-edition|master-edition|all-in-one|hardcover|full-color)/i;

const BOX_BUYING_TEXT_RE =
	/(?:box-set|buying-guide|collection-review|blue-lock|spy-x-family|jujutsu|demon-slayer|one-piece|chainsaw-man|attack-on-titan|claymore)/i;

const ANIME_TEXT_RE =
	/(?:blu-ray|bluray|4k|uhd|anime|90s-anime|ergo-proxy|lain|psycho-pass|steins-gate|ghost-in-the-shell|retro-anime)/i;

/**
 * Return the two most relevant collector guides for a given article
 */
export function getRecommendedGuidesForPost(
	slug: string,
	title: string,
	mediaType?: string
): RecommendedGuideLink[] {
	const text = `${slug} ${title}`.toLowerCase();
	let ids: GuideId[];

	if (mediaType === 'anime' || (ANIME_TEXT_RE.test(text) && !text.includes('space-brothers'))) {
		ids = ['bluray-regions', 'demographics'];
	} else if (text.includes('space-brothers')) {
		ids = ['demographics', 'bluray-regions'];
	} else if (EDITIONS_TEXT_RE.test(text)) {
		ids = ['editions', 'buying-care'];
	} else if (BOX_BUYING_TEXT_RE.test(text)) {
		ids = ['buying-care', 'editions'];
	} else {
		ids = ['demographics', 'editions'];
	}

	return ids.map((id) => {
		const meta = GUIDE_PAGE_MAP[id];
		return {
			href: meta.href,
			icon: meta.icon,
			label: `Guide | ${meta.shortTitle}`,
			title: meta.title,
			description: meta.summary,
		};
	});
}

/**
 * Filter and rank up to `limit` related review articles for a collector guide footer
 */
export function filterPostsForGuide(
	guideId: GuideId,
	allPosts: CollectionEntry<'blog'>[],
	limit = 6
): CollectionEntry<'blog'>[] {
	const meta = GUIDE_PAGE_MAP[guideId];
	const keywords = meta.keywords.map((kw) => kw.toLowerCase());
	const preferredRank = new Map(meta.preferredSlugs.map((slug, idx) => [slug, idx]));

	const getPriorityScore = (post: CollectionEntry<'blog'>): number => {
		const slug = post.id.toLowerCase();
		const rank = preferredRank.get(slug);
		if (rank !== undefined) {
			return 1000 - rank * 10;
		}
		if (guideId === 'bluray-regions' && post.data.mediaType === 'anime') {
			return 600;
		}
		const haystack = `${post.id} ${post.data.title} ${(post.data.tags || []).join(' ')} ${post.data.category || ''} ${post.data.genre || ''}`.toLowerCase();
		let score = keywords.reduce((acc, kw) => acc + (haystack.includes(kw) ? 10 : 0), 0);
		if (guideId === 'editions' && EDITIONS_TEXT_RE.test(haystack)) score += 60;
		if (guideId === 'buying-care' && BOX_BUYING_TEXT_RE.test(haystack)) score += 60;
		if (guideId === 'demographics' && post.data.mediaType === 'comic') score += 30;
		return score;
	};

	const sorted = [...allPosts].sort((a, b) => {
		const scoreDiff = getPriorityScore(b) - getPriorityScore(a);
		if (scoreDiff !== 0) return scoreDiff;
		return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
	});

	return sorted.slice(0, limit);
}
