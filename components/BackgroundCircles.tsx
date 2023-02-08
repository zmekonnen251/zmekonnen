import { motion } from 'framer-motion';
import React from 'react';

const BackgroundCircles = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
			}}
			transition={{
				duration: 2.5,
			}}
			className='relative flex justify-center items-center'
		>
			<div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
			<div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
			<div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping' />

			<div className='rounded-full border border-[#F7ABBA] opacity-20 h-[600px] w-[600px] lg:h-[750px] lg:w-[750px] absolute mt-52 animate-pulse' />
			<div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping' />
		</motion.div>
	);
};

export default BackgroundCircles;
