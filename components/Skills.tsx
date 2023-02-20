import React from 'react';
import Skill from './Skill';
import { motion } from 'framer-motion';
import { Skill as SkillType } from '@/types';

type Props = {
	skills: SkillType[];
};
const Skills = ({ skills }: Props) => {
	return (
		<motion.div
			initial={{
				x: -200,
			}}
			whileInView={{ x: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 1.5,
			}}
			className='relative flex flex-col justify-center items-center text-center md:text-left max-w-full overflow-hidden xl:px-10 min-h-screen  mx-auto pb-10 '
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Skills
			</h3>
			<h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
				Hover over a skill for currency proficiency
			</h3>

			<div className='grid grid-cols-4 md:grid-cols-5 gap-5 mt-36  md:mt-48'>
				{skills.map(
					(skill, idx) =>
						skill.visible && (
							<Skill
								key={skill._id}
								skill={skill}
								directionLeft={idx % 2 === 0}
							/>
						)
				)}
			</div>
		</motion.div>
	);
};

export default Skills;
