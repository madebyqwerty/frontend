import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		students: [
			{
				name: 'John Doe',
				id: 'f7cabd53-49e1-4c93-b59e-6035811b134d'
			}
		]
	};
}) satisfies PageServerLoad;
