import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience as ExperienceType } from '@/types';

type Props = {
	experiences: ExperienceType[];
};

const Experience = ({ experiences }: Props) => {
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
			className='h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-full'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
				Experience
			</h3>
			<div className='mt-[120px] md:mt-[200px] lg:mt-[230px] w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory  p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
				{experiences.map((experience) => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	);
};

export default Experience;
