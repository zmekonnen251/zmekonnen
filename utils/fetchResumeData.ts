import { ResumeData } from '@/types';

export const fetchResumeData = async () => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_NODE_ENV === 'production'
				? 'https://latest-portfolio-ibaqgqwa0-zmekonnen251.vercel.app'
				: 'http://localhost:3000/'
		}/api/getResumeData`
	);
	const { resumeData } = await res.json();

	return resumeData[0] as ResumeData;
};
