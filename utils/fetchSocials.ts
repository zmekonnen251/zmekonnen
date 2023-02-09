import { Social } from '@/types';

export const fetchSocials = async () => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_NODE_ENV === 'production'
				? 'https://latest-portfolio-ibaqgqwa0-zmekonnen251.vercel.app'
				: 'http://localhost:3000/'
		}/api/getSocials`
	);
	const { socials } = await res.json();

	return socials as Social[];
};
