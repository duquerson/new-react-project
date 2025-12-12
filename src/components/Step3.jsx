import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step3 = () => {
	const { register, watch } = useFormContext();

	const addOns = [
		{
			id: 'online-service',
			title: 'Online service',
			description: 'Access to multiplayer games',
			priceMonthly: 1,
			priceYearly: 10,
		},
		{
			id: 'larger-storage',
			title: 'Larger storage',
			description: 'Extra 1TB of cloud save',
			priceMonthly: 2,
			priceYearly: 20,
		},
		{
			id: 'customizable-profile',
			title: 'Customizable Profile',
			description: 'Custom theme on your profile',
			priceMonthly: 2,
			priceYearly: 20,
		},
	];

	const yearly = watch('yearly');
	const selectedAddOns = watch('addOns') || [];

	return (
		<section className="flex flex-col">
			<fieldset className="flex flex-col">
				<legend className="sr-only">Pick add-ons</legend>
				<h1 className="text-marine-blue mb-2 text-2xl font-bold">Pick add-ons</h1>
				<p className="text-cool-gray mb-6">Add-ons enhance your gaming experience.</p>

				<div className="mb-8 flex flex-col gap-4">
					{addOns.map((addOn) => (
						<label
							key={addOn.id}
							htmlFor={addOn.id}
							className={`flex cursor-pointer items-center justify-between rounded-md border p-4 ${selectedAddOns.includes(addOn.id) ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
						>
							<div className="flex items-center">
								<input
									type="checkbox"
									id={addOn.id}
									value={addOn.id}
									className="accent-purplish-blue mr-4 h-5 w-5"
									{...register('addOns')}
								/>
								<div>
									<h3 className="text-marine-blue font-bold">{addOn.title}</h3>
									<p className="text-cool-gray text-sm">{addOn.description}</p>
								</div>
							</div>
							<span className="text-purplish-blue text-sm">
								+${yearly ? addOn.priceYearly : addOn.priceMonthly}/{yearly ? 'yr' : 'mo'}
							</span>
						</label>
					))}
				</div>
			</fieldset>
		</section>
	);
};

export default Step3;
