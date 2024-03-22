"use client"
import { useState } from "react";

type StepProps = {
    nextStep: () => void;
    prevStep?: () => void;
};

const Step1: React.FC<StepProps> = ({ nextStep }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Step 1: Personal Information</h2>
            {/* Fields for Step 1 */}
            <button
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
                Next
            </button>
        </div>
    );
};

const Step2: React.FC<StepProps> = ({ nextStep, prevStep }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Step 2: Contact Information</h2>
            {/* Fields for Step 2 */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-lg"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

const Step3: React.FC<{ prevStep: () => void }> = ({ prevStep }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Step 3: Confirmation</h2>
            {/* Fields for Step 3 */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-lg"
                >
                    Back
                </button>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

const FormularioTresPasos: React.FC = () => {
    const [step, setStep] = useState<number>(1);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="flex justify-center items-cente">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                {step === 1 && <Step1 nextStep={nextStep} />}
                {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <Step3 prevStep={prevStep} />}
            </div>
        </div>
    );
};

export default FormularioTresPasos;
