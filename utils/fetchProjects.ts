import { Project } from '@/types';

export const fetchProjects = async () => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_NODE_ENV === 'production'
				? 'https://latest-portfolio-ibaqgqwa0-zmekonnen251.vercel.app'
				: 'http://localhost:3000/'
		}/api/getProjects`
	);
	const { projects } = await res.json();

	return projects as Project[];
};
