import { Experience } from '@/types';

export const fetchExperiences = async () => {
	const res = await fetch(`http://localhost:3000/api/getExperiences`);
	const { experiences } = await res.json();

	return experiences as Experience[];
};
