import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	error(401, {
		message: 'Autentikasi diperlukan. Silakan login terlebih dahulu.'
	});
};
