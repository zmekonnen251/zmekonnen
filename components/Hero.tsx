/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/types';
import { urlFor } from '@/sanity';

type Props = {
	pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		words: [
			`Hi, My name is ${pageInfo?.name}`,
			`I am a ${pageInfo?.role}`,
			'<LovesToCode/>',
		],
		loop: true,

		delaySpeed: 2000,
	});
	return (
		<div className='h-screen pt-20 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			{/* <div className='hidden dark:block'>
				<BackgroundCircles />
			</div> */}
			<img
				className='relative rounded-full h-32 w-32 mx-auto '
				src={urlFor(pageInfo?.heroImage).url()}
				alt='/'
			/>
			<div className='z-30'>
				<h2 className='text-sm uppercase pb-2 tracking-[13px]'>
					{pageInfo?.role}
				</h2>
				<h1 className='text-4xl lg:text-[2.7rem] font-semibold px-10'>
					<span className=' mr-3'>{text}</span> <Cursor cursorColor='#f7ab0a' />
				</h1>

				<div className='pt-5 '>
					<Link href='#about'>
						<button className='hero-button'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='hero-button'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='hero-button'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='hero-button'>Projects</button>
					</Link>
					<Link href='/resume'>
						<button className='hero-button'>Resume</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
