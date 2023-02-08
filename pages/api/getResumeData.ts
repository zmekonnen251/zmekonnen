import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { ResumeData } from '@/types';

const query = groq`*[_type == "resume"]{
  ...,
  contact[]->,
  experiences[]->,
  educations[]->,
  socials[]->,
  projects[]->,
}`;

type Data = {
	resumeData: ResumeData;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const resumeData: ResumeData = await sanityClient.fetch(query);
	res.status(200).json({ resumeData });
}
