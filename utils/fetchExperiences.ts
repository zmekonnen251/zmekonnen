import { Experience } from '@/types';

export const fetchExperiences = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getExperiences`);
	const { experiences } = await res.json();

	return experiences as Experience[];
};
