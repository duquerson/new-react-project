import React from 'react';
import IconThankYou from '../assets/images/icon-thank-you.svg';

const Step5 = () => {
	return (
		<section className="flex h-full flex-col items-center justify-center p-6 text-center">
			<img src={IconThankYou} alt="Thank You Icon" className="mb-6 h-16 w-16" />
			<h2 className="text-marine-blue mb-4 text-3xl font-bold">Thank you!</h2>
			<p className="text-cool-gray text-base">
				Thanks for confirming your subscription! We hope you have fun using our platform. If you
				ever need support, please feel free to email us at support@loremgaming.com.
			</p>
		</section>
	);
};

export default Step5;
