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
        <h2 className="text-marine-blue text-2xl font-bold mb-2">Pick add-ons</h2>
        <p className="text-cool-gray mb-6">Add-ons enhance your gaming experience.</p>

        <div className="flex flex-col gap-4 mb-8">
          {addOns.map((addOn) => (
            <label
              key={addOn.id}
              htmlFor={addOn.id}
              className={`flex items-center justify-between p-4 border rounded-md cursor-pointer
              ${selectedAddOns.includes(addOn.id) ? 'border-purplish-blue bg-alabaster' : 'border-light-gray hover:border-purplish-blue'}`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={addOn.id}
                  value={addOn.id}
                  className="w-5 h-5 mr-4 accent-purplish-blue"
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
