import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	error(404, {
		message: 'Halaman yang Anda cari tidak dapat ditemukan di Baricode Indonesia.'
	});
};
