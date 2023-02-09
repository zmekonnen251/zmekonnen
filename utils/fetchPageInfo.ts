import { PageInfo } from '@/types';

export const fetchPageInfo = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getPageInfo`
	);
	const { pageInfo } = await res.json();

	return pageInfo as PageInfo;
};
