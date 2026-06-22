import { error } from '@sveltejs/kit';

type AreaServedInfo = {
	shortName: string;
	longName: string;
	neighborhoods: string[];
	zipCodes: string[];
	slug: string;
};

const areasServed: Record<'battle-ground' | 'vancouver' | 'washougal' | 'camas', AreaServedInfo> = {
	'battle-ground': {
		shortName: 'Battle Ground',
		longName: 'Battle Ground, WA',
		neighborhoods: ['The Cedars', 'Heisson Hill', 'Battle Ground Village'],
		zipCodes: ['98604', '98606'],
		slug: 'battle-ground'
	},
	vancouver: {
		shortName: 'Vancouver',
		longName: 'Vancouver, WA',
		neighborhoods: ['Felida', 'Cascade Park', 'Salmon Creek'],
		zipCodes: ['98660', '98661', '98663', '98683'],
		slug: 'vancouver'
	},
	washougal: {
		shortName: 'Washougal',
		longName: 'Washougal, WA',
		neighborhoods: ['Lookout Ridge', 'Colorado Ridge', 'Magnolia Heights'],
		zipCodes: ['98671'],
		slug: 'washougal'
	},
	camas: {
		shortName: 'Camas',
		longName: 'Camas, WA',
		neighborhoods: ['Prune Hill', 'Lacamas Shores', 'Grass Valley'],
		zipCodes: ['98607', '98682'],
		slug: 'camas'
	}
};

export function load({ params }) {
	if (Object.keys(areasServed).includes(params.slug)) {
		return areasServed[params.slug as keyof typeof areasServed];
	}

	return error(404);
}
