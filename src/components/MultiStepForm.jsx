import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import useFormStore from '../store/formStore';
import Navigation from './Navigation';
import StepIndicator from './StepIndicator';
import bgMobile from '../assets/images/bg-sidebar-mobile.svg';
import bgDesktop from '../assets/images/bg-sidebar-desktop.svg';

const MultiStepForm = () => {
  const { currentStep, goToNextStep } = useFormStore();
  
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      plan: 'arcade',
      yearly: false,
      addOns: []
    }
  });

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
    goToNextStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <div className="md:flex md:items-center md:justify-center min-h-screen">
      {/* Mobile Background and Step Indicator */}
      <div className="md:hidden">
        <img src={bgMobile} alt="" className="absolute top-0 left-0 w-full h-44 object-cover -z-10" />
        <div className="absolute top-8 left-0 right-0 z-20">
          <StepIndicator />
        </div>
      </div>

      <FormProvider {...methods}>
        {/* The form needs to span the full height on mobile to contain the sticky footer */}
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col h-full md:h-auto">
          
          {/* Main content area that holds the card */}
          <main className="flex-grow md:flex-grow-0">
            <div className="relative mt-28 mx-4 md:mt-0 md:mx-0">
              <div className="bg-white rounded-lg shadow-xl md:flex md:w-[940px] md:p-4">
                {/* Desktop Sidebar */}
                <aside className="hidden md:block relative w-[274px] rounded-lg">
                  <img src={bgDesktop} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                  <div className="relative z-10 p-8">
                    <StepIndicator />
                  </div>
                </aside>
                
                {/* Step Content */}
                <div className="flex-1 flex flex-col p-6 md:px-24 md:py-10">
                  <div className="flex-grow">
                    {currentStep < 5 ? renderStep() : <Step5 />}
                  </div>
                  
                  {/* Desktop Navigation */}
                  {currentStep < 5 && (
                    <div className="hidden md:block mt-8">
                      <Navigation />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>

          {/* Mobile Navigation */}
          {currentStep < 5 && (
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg">
              <Navigation />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default MultiStepForm;
