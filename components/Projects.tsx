/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import projectImg from '../public/assets/projects/portfolio.png';
import Image from 'next/image';
import { Project } from '@/types';
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className=' h-screen relative flex flex-col md:flex-row max-w-full justify-evenly mx-auto z-0 overflow-hidden items-center  text-left pb-10 '
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
				Projects
			</h3>
			<ChevronLeftIcon
				onClick={() => {
					const el = document.querySelector('.projects-container');
					el?.scrollBy(-300, 0);
				}}
				className='hidden md:block absolute z-50 top-[40%] md:left-10 lg:left-[10%]  transform -translate-y-1/2 h-10 w-10 text-white bg-[#f7ab0a]/80 rounded-full cursor-pointer hover:bg-[#f7ab0a]/100'
			/>
			<ChevronRightIcon
				onClick={() => {
					const el = document.querySelector('.projects-container');
					el?.scrollBy(300, 0);
				}}
				className='hidden md:block absolute top-[40%] md:right-10 lg:right-[10%] transform -translate-y-1/2 z-50 h-10 w-10 text-white bg-[#f7ab0a]/80 rounded-full cursor-pointer hover:bg-[#f7ab0a]/100'
			/>
			<div className='projects-container relative w-full flex overflow-scroll snap-x snap-mandatory  z-20 mt-16 md:mt-32  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
				{projects.map((project, idx) => (
					<div
						key={project._id}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-6 items-center justify-center p-20 h-screen'
					>
						<motion.div
							initial={{
								y: -300,
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
						>
							<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
								<img
									src={urlFor(project?.image).url()}
									alt={project?.title}
									className='group-hover:opacity-10 md:w-[750px] md:h-[400px] h-[300px] object-cover rounded-2xl shadow-2xl'
								/>
								<div className='invisible group-hover:visible absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
									<h3 className='text-2xl text-white tracking-wider text-center'>
										{project?.title}
									</h3>
									<p className='pb-4 pt-2 text-white text-center'>
										{project.technologies
											.map((tech) => tech.title.toLocaleUpperCase())
											.join(' / ')}
									</p>
									<Link
										href={{
											pathname: `projects/${project.slug.current}?id:${project._id}`,
											query: {
												id: project._id,
											},
										}}
										as={`/projects/${project.slug.current}`}
									>
										<p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
											More Info
										</p>
									</Link>
								</div>
							</div>
						</motion.div>
						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-3xl font-semibold text-center'>
								<span className='underline decoration-[#f7ab0a]/50'>
									Project {idx + 1} of {projects.length}:
								</span>{' '}
								{project?.title}
							</h4>
							<p className='text-lg text-center md:text-left'>
								{project?.summary}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
		</motion.div>
	);
};

export default Projects;
