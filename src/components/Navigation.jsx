import React from 'react';
import { useFormContext } from 'react-hook-form';
import useFormStore from '../store/formStore';

const Navigation = () => {
	const { currentStep, goToNextStep, goToPrevStep } = useFormStore();
	const { trigger } = useFormContext();

	const handleNext = async () => {
		let fieldsToValidate = [];
		if (currentStep === 1) {
			fieldsToValidate = ['name', 'email', 'phone'];
		} else if (currentStep === 2) {
			fieldsToValidate = ['plan'];
		}

		if (fieldsToValidate.length > 0) {
			const isValid = await trigger(fieldsToValidate);
			if (isValid) {
				goToNextStep();
			}
		} else {
			goToNextStep(); // For Step 3 which has no validation
		}
	};

	return (
		<div className={`flex w-full ${currentStep > 1 ? 'justify-between' : 'justify-end'}`}>
			{/* "Go Back" button: shown on steps 2, 3, 4 */}
			{currentStep > 1 && (
				<button
					type="button"
					onClick={goToPrevStep}
					className="text-cool-gray hover:text-marine-blue rounded-lg px-6 py-3 font-medium transition-colors duration-200"
				>
					Go Back
				</button>
			)}

			{/* "Next Step" button: shown on steps 1, 2, 3 */}
			{currentStep < 4 && (
				<button
					type="button"
					onClick={handleNext}
					className="bg-marine-blue hover:bg-purplish-blue rounded-lg px-6 py-3 text-white transition-colors duration-200"
				>
					Next Step
				</button>
			)}

			{/* "Confirm" button: shown only on step 4 */}
			{currentStep === 4 && (
				<button
					type="submit"
					className="bg-purplish-blue hover:bg-pastel-blue rounded-lg px-6 py-3 text-white transition-colors duration-200"
				>
					Confirm
				</button>
			)}
		</div>
	);
};

export default Navigation;
