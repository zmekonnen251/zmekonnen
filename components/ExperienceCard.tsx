/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import myPhotoSrc from './my-photo.jpg';
import { Experience } from '@/types';
import { urlFor } from '@/lib/sanity';

type Props = {
	experience: Experience;
};
const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className=' flex flex-col rounded-lg items-center  space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center py-5 bg-[#292929] hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
				viewport={{ once: true }}
				className='w-28 h-28 rounded-full xl:h-[120px] xl:w-[120px] object-center object-cover'
				src={urlFor(experience?.companyImage).url()}
				alt={experience?.company}

				// className='w-32 h-32 rounded-full xl:w-[200px] object-center object-cover'
			/>

			<div className='px-10'>
				<h4 className='text-3xl font-light uppercase text-gray-400 dark:text-gray-200'>
					{experience?.jobTitle}
				</h4>
				<p className='font-bold text-2xl mt-1 uppercase text-gray-400 dark:text-gray-200'>
					{experience?.company}
				</p>

				<div className='flex space-x-2 my-1'>
					{experience?.technologies.map((tech) => (
						<img
							className='w-8 h-8 rounded-full'
							key={tech?._id}
							src={urlFor(tech?.image).url()}
							alt={tech?.title}
						/>
					))}
				</div>

				<p className='uppercase py-5  text-gray-400 dark:text-gray-200'>
					{new Date(experience?.dateStarted).toDateString()} -{' '}
					{new Date(experience?.dateEnded).toDateString()}
				</p>

				<ul className='list-disc space-y-4 ml-5 text-lg text-gray-400 dark:text-gray-200'>
					{experience?.points.map((point, idx) => (
						<li key={idx}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
