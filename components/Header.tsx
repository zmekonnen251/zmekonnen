import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/types';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className='w-10 h-10 text-yellow-500 '
					role='button'
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className='w-10 h-10 text-gray-900 '
					role='button'
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};
	return (
		<header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center'
			>
				{/* Social Icons */}
				<div className='mr-6'>{renderThemeChanger()}</div>
				{socials.map((social) => (
					<SocialIcon
						url={social.url}
						fgColor='gray'
						bgColor='transparent'
						key={social._id}
					/>
				))}
			</motion.div>
			<Link href='#contact'>
				{mounted && (
					<motion.div
						initial={{
							x: 500,
							opacity: 0,
							scale: 0.5,
						}}
						animate={{
							x: 0,
							opacity: 1,
							scale: 1,
						}}
						transition={{
							duration: 1.5,
						}}
						className='flex flex-row items-center text-gray-300 cursor-pointer'
					>
						<SocialIcon
							className='cursor-pointer'
							network='email'
							fgColor='gray'
							bgColor='transparent'
						/>
						<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
							Get in Touch
						</p>
					</motion.div>
				)}
			</Link>
		</header>
	);
};

export default Header;
