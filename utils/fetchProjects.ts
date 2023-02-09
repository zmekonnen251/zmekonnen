import { Project } from '@/types';

export const fetchProjects = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProjects`
	);
	const { projects } = await res.json();

	return projects as Project[];
};
