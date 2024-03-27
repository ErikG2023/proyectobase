import React from 'react'

interface Props {
    title: string;
    subtitle:string;
    image: React.ReactNode;
}



export default function CardHead({ title,subtitle,image }: Props) {
    return (
        <div className="flex-shrink-0 relative overflow-hidden flex justify-between items-center md:max-w-4xl bg-blue-500/15 rounded-xl ">
            <svg className="absolute bottom-0 left-0 opacity-10 oscale-150" viewBox="80 44 400 260" fill="none">
                {[...Array(10)].map((_, index) => (
                    <circle key={index} cx="100" cy="300" r={60 * (index + 1)} stroke="#1e4ebb" strokeWidth="35" fill="none" />
                ))}
            </svg>
            <div className="relative">
                <p className="ml-7 text-sm font-bold sm:text-2xl text-blue-800">{title}</p>
                <p className="ml-7 text-xs font-bold sm:text-md text-blue-800/40">{subtitle}</p>
            </div>
            <div className="ml-4 relative top-1 ">
                {/* <Image src={image} width={150} alt="" /> */}
                {image}
            </div>
        </div>
    )
}


