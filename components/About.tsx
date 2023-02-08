/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';
import myPhotoSrc from './my-photo.jpg';

import Image from 'next/image';
import { PageInfo } from '@/types';
import { urlFor } from '@/sanity';
import Link from 'next/link';
type Props = {
	pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
	return (
		<div className='flex flex-col relative text-center md:text-left md:flex-row max-w-full overflow-hidden px-10 justify-evenly mx-auto items-center h-screen'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About Me
			</h3>

			<motion.div
				initial={{
					x: -200,
				}}
				whileInView={{ x: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 1.5,
				}}
				className='mt-32 md:mt-0 md:mb-8 flex-shrink-0 w-56 h-56  md:w-64 md:h-95 xl:mt-48 xl:w-[500px] xl:h-[600px]'
			>
				<img
					src={urlFor(pageInfo?.profilePic).url()}
					alt='profile'
					className=' rounded-full object-cover md:rounded-3xl'
				/>
			</motion.div>

			<div className='space-y-7 px-0 md:px-10'>
				<h4 className='text-3xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#7fab0a]/50 text-[#f7ab0a]'>
						short
					</span>{' '}
					Introduction about me
				</h4>
				<p className='text-base pb-6'>{pageInfo?.backgroundInformation}</p>
				<Link href='/resume' className='mt-6'>
					<button className='hero-button'>Check My Resume</button>
				</Link>
			</div>
		</div>
	);
};

export default About;
