import React from 'react'
import { IoIosFlash } from 'react-icons/io'

export const Card2 = () => {
    return (
        <section className='w-[90%] max-w-xs mx-auto bg-white shadow-2xl md:flex md:rounded-2xl md:max-w-4xl'>

            <article className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-2xl p-10 text-white text-center md:rounded-2xl md:w-1/2 md:content-center'>
                <p className='text-xl font-bold text-light-lavender'>Lorem, ipsum.</p>

                <div className='w-24 aspect-square bg-gradient-to-b from-violet-blue to-persian-blue rounded-full mx-auto my-4 grid content-center md:w-32'>
                    <p className='text-3xl font-bold mb-2'>15</p>
                    <p className='text-xs font-bold text-light-lavender'>of 100</p>
                </div>

                <h3 className='text-2xl mb-4 font-bold'>Lorem.</h3>
                <p className='text-sm text-light-lavender'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            </article>

            <article className='p-10 grid gap-6 md:w-1/2'>
                <h3 className='text-lg font-bold'>Lorem</h3>

                <div className='bg-light-red/5 rounded-xl flex py-2 px-6 items-center'>
                    <IoIosFlash />
                    <p className='ml-3 text-md text-light-red'>Reaction</p>
                    <p className='ml-auto text-xs font-bold text-dark-gray-blue'>
                        <span>80</span>
                        <span className='text-dark-gray-blue/70'>/ 100</span>
                    </p>
                </div>
            </article>

        </section>
    )
}
