import React, { useState } from 'react';

const steps = [
    {
        Name: "Customer Info",
        Component: () => <div>Provide Your Contact Details.</div>
    },
    {
        Name: "Shipping Info",
        Component: () => <div>Provide Your Shipping Details.</div>
    },
    {
        Name: "Payments Info",
        Component: () => <div>Provide Your Payments for our Order.</div>
    },
    {
        Name: "Delivered",
        Component: () => <div>Your order has Delivered.</div>
    }
]

function Stepper() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <div className=" h-screen flex flex-col justify-center items-center">
            <div className='flex'>
                {steps.map((step, index) => (
                    <div key={index} className={`flex flex-col items-center mx-6`}>
                        <div
                            className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${currentStep === index ? 'bg-red-500 text-white border-red-900' : 'border-green-900'
                                } ${currentStep > index ? "bg-green-500" : ""}`}
                        >
                            {index + 1}
                        </div>
                        <div className="ml-2">{step.Name}</div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                {/* {currentStep > 0 && (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                        onClick={prevStep}
                    >
                        Previous
                    </button>
                )}
                {currentStep < steps.length - 1 && (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={nextStep}
                    >
                        Next
                    </button>
                )} */}

                {currentStep === steps.length ? (<button className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                >Finished</button>) : (<button className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={nextStep}>Next</button>)}
            </div>
        </div>
    );
}

export default Stepper;