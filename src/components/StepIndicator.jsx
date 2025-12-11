import React from 'react';
import useFormStore from '../store/formStore';

const StepIndicator = () => {
  const { currentStep, goToStep } = useFormStore();
  // Using an object to store step info including title
  const steps = [
    { number: 1, title: 'YOUR INFO' },
    { number: 2, title: 'SELECT PLAN' },
    { number: 3, title: 'ADD-ONS' },
    { number: 4, title: 'SUMMARY' },
  ];

  // A safe navigation that only allows going back to previous steps (for desktop sidebar)
  // For mobile, the buttons are disabled if they are future steps
  const handleStepChange = (step) => {
    // On desktop, allow navigating to any visited step, but don't jump ahead unless it's step 1.
    // For simplicity, we'll allow jumping back to any previous step.
    // Jumping forward will still be handled by the form's 'Next Step' button with validation.
    if (step < currentStep) {
      goToStep(step);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 md:flex-col md:items-start md:space-x-0 md:space-y-6 md:p-8">
      {steps.map((step) => (
        <div key={step.number} className="flex items-center md:w-full">
          <button
            onClick={() => handleStepChange(step.number)}
            disabled={step.number >= currentStep} // Disable future steps for mobile and general
            aria-label={`Go to step ${step.number}`}
            className={`w-8 h-8 rounded-full border border-white text-sm font-bold flex items-center justify-center transition-colors duration-200
              ${currentStep === step.number
                ? 'bg-light-blue text-marine-blue border-light-blue'
                : 'text-white'
              }
              ${step.number < currentStep ? 'cursor-pointer' : 'cursor-not-allowed'}
              md:text-base md:w-9 md:h-9
            `}
          >
            {step.number}
          </button>
          <div className="hidden md:block ml-4 text-left">
            <p className="text-cool-gray text-xs">STEP {step.number}</p>
            <p className="text-white font-bold text-sm uppercase tracking-wide">{step.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;