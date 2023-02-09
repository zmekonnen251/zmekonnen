import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { PageInfo } from '@/types';
import { toast } from 'react-toastify';

type Inputs = {
	name: string;
	subject: string;
	email: string;
	message: string;
};

type Props = {
	pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (values) => {
		const formData = new FormData();
		formData.append('name', values.name);
		formData.append('subject', values.subject);
		formData.append('email', values.email);
		formData.append('message', values.message);

		await fetch('https://getform.io/f/41fba76e-e7e1-4347-871d-0f2e05eafe20', {
			method: 'POST',
			body: formData,
		});

		toast(
			'Thank you for contacting me. I will replay your message within 24hrs!',
			{
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			}
		);
		reset();
	};

	return (
		<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center pb-20'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
				Contact
			</h3>
			<div className='mt-[200px] flex flex-col space-y-10'>
				<h4 className='text-3xl font-semibold text-center'>
					I have got just what you need.{' '}
					<span className='decoration-[#f7ab0a]/50 underline'>Lets Talk.</span>
				</h4>

				<div className='space-y-10'>
					<div className='flex items-center space-x-5 justify-center'>
						<PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>{pageInfo.phoneNumber}</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>{pageInfo.email}</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>{pageInfo.address}</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 w-fit mx-auto pb-8'
				>
					<div className='flex space-x-2'>
						<div className='flex flex-col space-y-1'>
							<input
								placeholder='First Name'
								className='contactInput'
								type='text'
								{...register('name', {
									required: 'First name is required',
									minLength: {
										value: 2,
										message: 'First name must have at least 2 characters',
									},
								})}
							/>
							<ErrorMessage
								errors={errors}
								name='name'
								render={({ message }) => (
									<p className='self-start text-lg text-red-600'>{message}</p>
								)}
							/>
						</div>
						<div className='flex flex-col space-y-1 '>
							<input
								placeholder='Email'
								className='contactInput'
								type='email'
								{...register('email', {
									required: 'Email is required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Invalid email address',
									},
								})}
							/>
							<ErrorMessage
								errors={errors}
								name='email'
								render={({ message }) => (
									<p className='self-start text-sm text-red-500'>{message}</p>
								)}
							/>
						</div>
					</div>
					<div className='flex flex-col space-y-1'>
						<input
							placeholder='Subject'
							className='contactInput'
							type='text'
							{...register('subject', {
								required: 'Subject is required',
								minLength: {
									value: 4,
									message: 'Subject must have at least 4 characters',
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name='subject'
							render={({ message }) => (
								<p className='self-start text-sm text-red-500'>{message}</p>
							)}
						/>
					</div>

					<div className='flex flex-col space-y-1'>
						<textarea
							{...register('message', {
								required: 'Message is required',
								minLength: {
									value: 5,
									message: 'Message must have at least 5 characters',
								},
							})}
							placeholder='Message'
							className='contactInput'
						/>
						<ErrorMessage
							errors={errors}
							name='message'
							render={({ message }) => (
								<p className='self-start text-sm text-red-500'>{message}</p>
							)}
						/>
					</div>
					<button
						type='submit'
						className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactMe;
