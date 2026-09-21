import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	error(503, {
		message: 'Layanan sedang dalam pemeliharaan berkala.'
	});
};
