import { Social } from '@/types';

export const fetchSocials = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getSocials`);
	const { socials } = await res.json();

	return socials as Social[];
};
