import { Experience } from '@/types';

export const fetchExperiences = async () => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_NODE_ENV === 'production'
				? 'https://latest-portfolio-ibaqgqwa0-zmekonnen251.vercel.app'
				: 'http://localhost:3000/'
		}/api/getExperiences`
	);
	const { experiences } = await res.json();

	return experiences as Experience[];
};
