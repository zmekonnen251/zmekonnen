import { Social } from '@/types';

export const fetchSocials = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSocials`
	);
	const { socials } = await res.json();

	return socials as Social[];
};
