import { ResumeData } from '@/types';

export const fetchResumeData = async () => {
	const res = await fetch(`http://localhost:3000/api/getResumeData`);
	const { resumeData } = await res.json();

	return resumeData[0] as ResumeData;
};
