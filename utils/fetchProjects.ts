import { Project } from '@/types';

export const fetchProjects = async () => {
	const res = await fetch(`http://localhost:3000/api/getProjects`);
	const { projects } = await res.json();

	return projects as Project[];
};
