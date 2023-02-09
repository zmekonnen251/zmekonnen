import { ResumeData } from '@/types';

export const fetchResumeData = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getResumeData`
	);
	const { resumeData } = await res.json();

	return resumeData[0] as ResumeData;
};
