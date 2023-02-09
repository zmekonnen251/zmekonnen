import { Skill } from '@/types';

export const fetchSkills = async () => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_NODE_ENV === 'production'
				? 'https://latest-portfolio-ibaqgqwa0-zmekonnen251.vercel.app'
				: 'http://localhost:3000/'
		}/api/getSkills`
	);
	const { skills } = await res.json();

	return skills as Skill[];
};
