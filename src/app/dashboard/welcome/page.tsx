import { Card2 } from '@/components/cards/Card2'
import CardGradient from '@/components/cards/CardGradient'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import image from "../../../../public/welcome2.svg";
import Image from 'next/image';
import { SiGooglehome } from 'react-icons/si';

export default function page() {
    return (
        <div>
            <div className='bg-pink-300'>
                <h3>Hola Erik Gonzalez</h3>
                <p>Bienvenido al Dashboard</p>
            </div>
        </div>
    )
}
