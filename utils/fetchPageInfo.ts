import { PageInfo } from '@/types';

export const fetchPageInfo = async () => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_NODE_ENV === 'production'
				? 'https://latest-portfolio-ibaqgqwa0-zmekonnen251.vercel.app'
				: 'http://localhost:3000/'
		}/api/getPageInfo`
	);
	const { pageInfo } = await res.json();

	return pageInfo as PageInfo;
};
