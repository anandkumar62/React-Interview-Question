import React, { useState } from 'react';

function Stepper() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            name: "Customer Info",
            component: () => <div>Provide Your Contact Details.</div>
        },
        {
            name: "Shipping Info",
            component: () => <div>Provide Your Shipping Details.</div>
        },
        {
            name: "Payments Info",
            component: () => <div>Provide Your Payments for our Order.</div>
        },
        {
            name: "Delivered",
            component: () => <div>Your order has Delivered.</div>
        }
    ];

    function handlePrev() {
        setActiveStep(prevSteps => prevSteps - 1)
    }
    function handleNext() {
        setActiveStep(prevSteps => prevSteps + 1)
    }

    return (
        <div className="max-w-md mx-auto h-screen grid items-center">
            <div className="bg-white hover:shadow-2xl shadow-md rounded-md p-4 flex flex-col justify-center items-center">
                {steps.map((step, index) => (
                    <div key={index} className={`flex items-center mb-4 cursor-pointer ${activeStep === index ? "text-green-500" : "text-red-500"} ${activeStep > index ? "text-green-500" : ""}`} >
                        <div className="h-6 w-6 flex items-center justify-center rounded-full border-2 border-gray-300">
                            {index + 1}
                        </div>
                        <div className={`ml-2 ${activeStep === index ? 'font-semibold' : ''}`}>{step.name}</div>
                    </div>
                ))}
                <div className="mt-6 text-center">
                    <h1 className="text-xl font-semibold mb-4">{steps[activeStep].name}</h1>
                    <h3>{steps[activeStep].component()}</h3>
                </div>
                <div className="mt-6 flex justify-center gap-14">
                    <button
                        onClick={handlePrev}
                        className={`bg-gray-200 hover:bg-gray-500 hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg ${activeStep === 0 ? 'hidden' : ''
                            }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className={`bg-blue-500 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg ${activeStep === steps.length - 1 ? 'hidden' : ''
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Stepper;
