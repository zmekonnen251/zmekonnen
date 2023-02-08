import { Skill } from '@/types';

export const fetchSkills = async () => {
	const res = await fetch(`http://localhost:3000/api/getSkills`);
	const { skills } = await res.json();

	return skills as Skill[];
};
