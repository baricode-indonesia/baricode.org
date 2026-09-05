import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	error(500, {
		message: 'Terjadi kesalahan pada server internal Baricode Indonesia.'
	});
};
