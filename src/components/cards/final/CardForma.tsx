import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    amount: number;
    backgroundCircle: string;
}



export default function CardForma({ title, subtitle, amount, backgroundCircle }: Props) {
    return (
        <div >

            <svg className="absolute bottom-0 left-0 mb-8 opacity-10 scale-150" viewBox="0 0 375 283" fill="none" >
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>

            <span className="block text-xl md:text-2xl text-white mb-4 md:mb-7">{title}</span>

            <div className="relative px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <div className={`w-32 h-32 ${backgroundCircle} rounded-full flex justify-center items-center mb-4 shadow-md`}>
                    <p className='text-4xl font-bold md:text-5xl text-white'>{amount}</p>
                </div>
            </div>

            <div className="relative text-white mt-4 px-6">
                <div className="flex justify-between">
                    <span className="block font-semibold text-xl md:text-3xl">{subtitle}</span>
                </div>
            </div>
        </div>
    )
}


