import React from 'react'

interface Props {
    title: string;
    amount: number;
    percent: string;
    description: string;
    icon?: React.ReactNode;
    backgorundColor: string;
}



export default function CardSecond({title,amount,percent,description,icon,backgorundColor }: Props) {
    return (
        <div className={`${backgorundColor} w-full p-2 rounded-md shadow-md md:shadow-md`}>
            <p className="text-lg md:text-lg font-semibold leading-none text-teal-500 uppercase text-center">{title}</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-3 text-gray-800 mt-3 md:mt-3 text-center">{amount}</p>
            <div className="px-6 flex flex-col">
                <div className="w-full flex justify-end">
                    <div className="flex items-center">
                        <p className="text-xs leading-none text-green-600">{percent}</p>
                    </div>
                </div>
                <div className="mt-2.5">
                    <div className="w-full h-1 bg-gray-200 rounded-full ">
                        <div className="w-[50%] h-1 bg-blue-500 rounded-full" />
                    </div>
                </div>
            </div>
            <p className="my-3 text-xs leading-3 text-gray-400 text-center">{description}</p>
        </div>
    )
}


