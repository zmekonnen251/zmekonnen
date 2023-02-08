/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Skill as SkillType } from '@/types';
import { urlFor } from '@/lib/sanity';

type Props = {
	directionLeft?: boolean;
	skill: SkillType;
};

const Skill = ({ skill, directionLeft }: Props) => {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.div
				initial={{
					x: directionLeft ? -200 : 200,
				}}
				transition={{
					duration: 1,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
			>
				<img
					src={urlFor(skill?.image).url()}
					alt={skill.title}
					className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 filter group-hover:grayscale ease-in-out'
				/>
			</motion.div>
			{/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28  rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>
						{skill.progress}
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default Skill;
