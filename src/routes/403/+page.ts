import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	error(403, {
		message: 'Akses ditolak. Anda tidak memiliki hak akses untuk membuka bagian ini.'
	});
};
