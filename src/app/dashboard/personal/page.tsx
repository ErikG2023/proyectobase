"use client"

import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

// Definir esquema de datos con Zod
const FormDataSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Invalid email address').email('Email is required'),
    country: z.string().min(1, 'Country is required'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zip: z.string().min(1, 'ZIP code is required'),
});

type Inputs = z.infer<typeof FormDataSchema>;

const StepForm: React.FC = () => {
    // Estado para controlar el paso actual del formulario
    const [step, setStep] = useState<number>(0);

    // Inicializar el formulario y configurar la validación con Zod
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger // trigger para activar la validación de un solo campo
    } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema),
    });

    // Función para manejar el envío del formulario
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // Guardar los datos en el localStorage
        localStorage.setItem('formData', JSON.stringify(data));
        
        // Aquí puedes hacer lo que quieras con los datos del formulario
        console.log('Datos del formulario guardados en localStorage:', data);
    };

    // Función para avanzar al siguiente paso
    const handleNextStep = async () => {
        // Validar el campo actual antes de avanzar al siguiente paso
        const isValid = await trigger(fields[step]);
        if (isValid) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    // Función para retroceder al paso anterior
    const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

    // Definir los campos para cada paso del formulario
    const fields: (keyof Inputs)[][] = [
        ['firstName', 'lastName', 'email'],
        ['country', 'street', 'city', 'state', 'zip'],
        [],
    ];

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                {/* Formulario */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Renderizar campos correspondientes al paso actual */}
                    {fields[step].map((fieldName) => (
                        <div key={fieldName}>
                            {/* Etiqueta del campo */}
                            <label htmlFor={fieldName} className="block text-sm font-medium leading-6 text-gray-900">
                                {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                            </label>
                            {/* Campo de entrada */}
                            <input
                                type="text"
                                id={fieldName}
                                {...register(fieldName)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                            />
                            {/* Mensaje de error si existe */}
                            {errors && errors[fieldName] && <p className='mt-2 text-sm text-red-400'>{errors[fieldName]?.message}</p>}
                        </div>
                    ))}
                    {/* Botones de navegación */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handlePrevStep}
                            disabled={step === 0}
                            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={handleNextStep}
                            disabled={step === fields.length - 1}
                            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                    {/* Mostrar botón de envío solo en el último paso */}
                    {step === fields.length - 1 && (
                        <div>
                            <button
                                type="submit"
                                className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50"
                            >
                                Validar datos
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default StepForm;
