import React from 'react'

interface Props {
    title: string;
    percent: string;
    description: string;
    icon: React.ReactNode;
    backgorundColor: gradient;
}

type gradient =
    'bg-gradient-to-r from-purple-600 to-pink-500' |
    'bg-gradient-to-br from-green-500 to-blue-500' |
    'bg-gradient-to-r from-blue-500 to-blue-700'

export default function CardGradient({ title, percent, description, icon, backgorundColor }: Props) {
    return (
        <div className={`${backgorundColor} p-6  rounded-lg shadow-lg text-white`}>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-3xl font-bold mt-2">{percent}</p>
                </div>
                <div className="bg-white p-3 rounded-full">
                    {icon}
                </div>
            </div>
            <div className="mt-4">
                <span className="text-sm">{description}</span>
            </div>
        </div>
    )
}
