import { Social } from '@/types';

export const fetchSocials = async () => {
	const res = await fetch(`http://localhost:3000/api/getSocials`);
	const { socials } = await res.json();

	return socials as Social[];
};
