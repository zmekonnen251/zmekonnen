/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import logoImg from '@/public/fav.png';
import Image from 'next/image';
import {
	Experience as ExperienceType,
	PageInfo,
	Project,
	Skill,
	Social,
} from '@/types';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import { urlFor } from '@/sanity';
import { ToastContainer } from 'react-toastify';

type Props = {
	pageInfo: PageInfo;
	experiences: ExperienceType[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, skills, socials, projects, experiences }: Props) => {
	return (
		<div className=' h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
			<Head>
				<title>Zelalem | Full-Stack Developer</title>
				<meta
					name='description'
					content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
				/>
				<link rel='icon' href={urlFor(pageInfo?.logo).url()} />
			</Head>

			{/* Header */}

			<Header socials={socials} />

			{/* Hero */}

			<section id='hero' className='snap-start'>
				<Hero pageInfo={pageInfo} />
			</section>
			{/* About */}
			<section id='about' className='snap-center'>
				<About pageInfo={pageInfo} />
			</section>
			{/* Experience */}
			<section id='experience' className='snap-center'>
				<Experience experiences={experiences} />
			</section>
			{/* Skills */}
			<section id='skills' className='snap-center'>
				{/* Skills */}
				<Skills skills={skills} />
			</section>

			{/* Projects */}

			<section id='projects' className='snap-start'>
				<Projects projects={projects} />
			</section>

			{/* Contact Me */}
			<section id='contact' className='snap-start'>
				<ContactMe pageInfo={pageInfo} />
			</section>
			<Link href='#hero'>
				<footer className='sticky bottom-3 w-full cursor-pointer '>
					<div className='flex items-center justify-center'>
						<img
							className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
							src={urlFor(pageInfo.logo).url()}
							alt='back to top'
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: ExperienceType[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},

		//Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 10, // In seconds
	};
};
