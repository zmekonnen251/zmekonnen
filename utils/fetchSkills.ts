import { Skill } from '@/types';

export const fetchSkills = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getSkills`);
	const { skills } = await res.json();

	return skills as Skill[];
};
