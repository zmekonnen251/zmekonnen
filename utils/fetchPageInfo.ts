import { PageInfo } from '@/types';

export const fetchPageInfo = async () => {
	const res = await fetch(`http://localhost:3000/api/getPageInfo`);
	const { pageInfo } = await res.json();

	return pageInfo as PageInfo;
};
