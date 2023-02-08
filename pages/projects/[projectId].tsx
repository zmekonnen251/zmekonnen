/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

import Link from 'next/link';
import { Project, Social } from '@/types';
import { fetchSocials } from '@/utils/fetchSocials';
import { fetchProjects } from '@/utils/fetchProjects';
import Head from 'next/head';
import { urlFor } from '@/sanity';

type Props = {
	project: Project;
	socials: Social[];
};

const ProjectDetailsPage = ({ socials, project }: Props) => {
	return (
		<div className=' h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
			<Head>
				<title>{project?.title}</title>
				<meta name='description' content={project?.summary} />
				<link rel='icon' href='../../public/fav.png' />
			</Head>
			<Header socials={socials} />
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<img
					className='absolute object-cover w-full h-[50vh]  z-1'
					src={urlFor(project?.image).url()}
					alt={project?.title as string}
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-65%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>{project.title.toLocaleUpperCase()}</h2>
					<h3>
						{project.technologies
							.map((tech) => tech.title.toLocaleUpperCase())
							.join(' / ')}
					</h3>
				</div>
			</div>

			<div className='flex flex-col relative text-center md:text-left md:flex-row max-w-full md:justify-between px-20 overflow-hidden  mx-auto  mt-10 '>
				<div className='max-w-5xl'>
					<h2 className='text-xl font-semibold pb-2'>Project Overview</h2>
					<p className='text-lg'>{project?.summary}</p>
					<a href={project?.liveDemoLink} target='_blank' rel='noreferrer'>
						<button className='hero-button px-8 py-2 mt-4 mr-8 border-gray-600 dark:border-gray-300'>
							Demo
						</button>
					</a>
					<a href={project?.sourceCodeLink} target='_blank' rel='noreferrer'>
						<button className='hero-button px-8 py-2 mt-4 border-gray-600 dark:border-gray-300'>
							Code
						</button>
					</a>
				</div>
				<div className='pt-8 shadow-lg shadow-gray-600 border-b-0 rounded-xl'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							{project?.technologies.map((technology) => (
								<p
									key={technology._id}
									className='text-gray-600 py-2 flex items-center'
								>
									<CheckCircleIcon className='pr-1 w-10 h-10' />{' '}
									{technology.title}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='flex items-center hero-button  border-gray-300 w-28 mx-20 mb-8'>
				<Link href='/#projects'>
					<p className='underline cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;

export const getStaticProps = async ({ params }: any) => {
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();
	const project = projects.find(
		(project) => project.slug.current === params?.projectId
	);

	return {
		props: {
			project,
			socials,
		},

		revalidate: 30, // In seconds
	};
};

export async function getStaticPaths() {
	const projects: Project[] = await fetchProjects();

	const paths = projects.map((project) => ({
		params: { projectId: project.slug.current },
	}));

	return { paths, fallback: false };
}
