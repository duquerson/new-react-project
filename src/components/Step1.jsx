import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1 = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<section className="flex flex-col">
			<h2 className="text-marine-blue mb-2 text-2xl font-bold">Personal info</h2>
			<p className="text-cool-gray mb-6">
				Please provide your name, email address, and phone number.
			</p>

			<div className="mb-4">
				<label htmlFor="name" className="text-marine-blue mb-1 block text-sm font-medium">
					Name
				</label>
				<input
					type="text"
					id="name"
					placeholder="e.g. Stephen King"
					className={`w-full rounded-md border p-2 focus:ring-1 focus:outline-none ${errors.name ? 'border-strawberry-red focus:ring-strawberry-red' : 'border-light-gray focus:ring-purplish-blue'}`}
					{...register('name', { required: 'Name is required' })}
				/>
				{errors.name && <p className="text-strawberry-red mt-1 text-sm">{errors.name.message}</p>}
			</div>

			<div className="mb-4">
				<label htmlFor="email" className="text-marine-blue mb-1 block text-sm font-medium">
					Email Address
				</label>
				<input
					type="email"
					id="email"
					placeholder="e.g. stephenking@lorem.com"
					className={`w-full rounded-md border p-2 focus:ring-1 focus:outline-none ${errors.email ? 'border-strawberry-red focus:ring-strawberry-red' : 'border-light-gray focus:ring-purplish-blue'}`}
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email address',
						},
					})}
				/>
				{errors.email && <p className="text-strawberry-red mt-1 text-sm">{errors.email.message}</p>}
			</div>

			<div className="mb-6">
				<label htmlFor="phone" className="text-marine-blue mb-1 block text-sm font-medium">
					Phone Number
				</label>
				<input
					type="tel"
					id="phone"
					placeholder="e.g. +1 234 567 890"
					className={`w-full rounded-md border p-2 focus:ring-1 focus:outline-none ${errors.phone ? 'border-strawberry-red focus:ring-strawberry-red' : 'border-light-gray focus:ring-purplish-blue'}`}
					{...register('phone', {
						required: 'Phone number is required',
						pattern: {
							value: /^\+?\d{10,15}$/, // Basic phone number pattern
							message: 'Invalid phone number',
						},
					})}
				/>
				{errors.phone && <p className="text-strawberry-red mt-1 text-sm">{errors.phone.message}</p>}
			</div>
		</section>
	);
};

export default Step1;
