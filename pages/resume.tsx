import React from 'react';
import Head from 'next/head';
import { ResumeData } from '@/types';
import { GetStaticProps } from 'next';
import { SocialIcon } from 'react-social-icons';
import Header from '@/components/Header';
import { groq } from 'next-sanity';
import { sanityClient } from '@/lib/sanity';

type Props = {
	resumeData: ResumeData;
};

const resume = ({ resumeData }: Props) => {
	return (
		<>
			<Head>
				<title>Zelalem | Resume</title>
				<meta
					name='description'
					content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
				/>
				<link rel='icon' href='/fav.png' />
			</Head>
			<Header socials={resumeData.socials} />
			<div className='max-w-[940px] mx-auto p-2 pt-[20px]'>
				<h2 className=' text-center mb-6 uppercase tracking-[20px] text-gray-500 text-2x'>
					Resume
				</h2>
				<div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
					<h2 className='text-center uppercase dark:text-gray-700'>
						{resumeData.name}
					</h2>
					<div className='flex flex-row items-center'>
						{resumeData?.socials?.map((social) => (
							<SocialIcon
								url={social.url}
								fgColor='gray'
								bgColor='transparent'
								key={social._id}
							/>
						))}
					</div>
				</div>
				<div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
					<div className='hidden sm:block'>
						<p>
							Proven Leadership <span className='px-1'>|</span> Web Development{' '}
							<span className='px-1'>|</span> Complex Problem Solving
						</p>
					</div>
					<div className='block sm:hidden'>
						<p>Proven Leadership</p>
						<p className='py-2'>Web Development</p>
						<p>Complex Problem Solving</p>
					</div>
				</div>
				<p>{resumeData.summary}</p>
				{/* Skills */}
				<div className='flex flex-col justify-start py-4'>
					<h5 className='text-center underline text-[18px] py-2'>SKILLS</h5>
					<p className='py-2'>
						<span className='font-bold'>Front-End:</span>
						{resumeData?.frontEndSkills?.map((skill) => (
							<span
								key={resumeData?.frontEndSkills?.indexOf(skill)}
								className='px-2 uppercase'
							>
								| {skill}
							</span>
						))}
					</p>

					<p>
						<span className='font-bold'>Back-End:</span>
						{resumeData?.backEndSkills?.map((skill) => (
							<span
								key={resumeData?.backEndSkills?.indexOf(skill)}
								className='px-2 uppercase'
							>
								| {skill}
							</span>
						))}
					</p>

					<p>
						<span className='font-bold'>Tools & Methods:</span>
						{resumeData?.otherSkills?.map((skill) => (
							<span
								key={resumeData?.otherSkills?.indexOf(skill)}
								className='px-2 uppercase'
							>
								| {skill}
							</span>
						))}
					</p>

					<p>
						<span className='font-bold'>Professional:</span>
						<span className='px-2'>|</span> Pair-Programming
						<span className='px-2'>|</span> Teamwork
						<span className='px-2'>|</span> Mentoring
					</p>
				</div>
				<h5 className='text-center underline text-[18px] py-4'>EXPERIENCES</h5>
				{/* Experience */}
				{resumeData.experiences.map((experience) => (
					<div key={experience._id} className='py-6'>
						<p>
							<span className='font-bold'>{experience.company}</span>
							<span className='px-2'>|</span> {experience.location}
						</p>
						<p className='py-1 underline'>
							{experience.jobTitle} (
							{new Date(experience.dateStarted).toDateString()} -{' '}
							{new Date(experience.dateEnded).toDateString()})
						</p>
						<ul className='list-disc list-outside px-7 py-1 mb-2 leading-relaxed'>
							{experience.points.map((description) => (
								<li key={experience.points.indexOf(description)}>
									{description}
								</li>
							))}
						</ul>
					</div>
				))}
				{/* Education */}
				<h5 className='text-center underline text-[18px] py-4'>EDUCATION</h5>
				{resumeData.educations.map((education) => (
					<div key={education._id} className='py-6'>
						<p>
							<span className='font-bold'>{education.schoolName}</span>
							<span className='px-2'>|</span> {education.location}
						</p>
						<p className='py-1 underline'>
							{education.programName} (
							{new Date(education.dateStarted).toDateString()} -{' '}
							{new Date(education.dateEnded).toDateString()})
						</p>
						<ul className='list-disc list-outside px-7 py-1 mb-2 leading-relaxed'>
							{education.points.map((description) => (
								<li key={education.points.indexOf(description)}>
									{description}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default resume;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const query = groq`*[_type == "resume"]{
  ...,
  contact[]->,
  experiences[]->,
  educations[]->,
  socials[]->,
  projects[]->,
}`;
	const resumeData: ResumeData = await sanityClient.fetch(query);

	return {
		props: {
			resumeData,
		},

		//Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 10, // In seconds
	};
};
