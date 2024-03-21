"use client"
import React, { useState } from 'react'
import BoxIcon from './BoxIcon'
import { LuChevronLeft, LuCrown } from 'react-icons/lu'
import clsx from "clsx"
import 'animate.css'

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={clsx(
                'flex h-screen transition-width duration-300',
                isCollapsed ? 'w-[80px]' : 'w-[240px]'
            )}
        >
            {/* Sidebar content */}
            <div className="bg-gray-800 text-white w-full">
                <div className="flex items-center justify-between px-4 py-3">
                    <h1 className="text-lg font-semibold">Sidebar</h1>
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        {isCollapsed ? 'Expandir' : 'Contraer'}
                    </button>
                </div>
                <ul className="py-2 px-4">
                    <li className="py-1">Opción 1</li>
                    <li className="py-1">Opción 2</li>
                    <li className="py-1">Opción 3</li>
                </ul>
            </div>

        </div>
    )
}
