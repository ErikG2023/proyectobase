"use client"
import { LuBrainCog, LuChevronLeft, LuChevronRight, LuPieChart } from "react-icons/lu"
import BoxIcon from "./BoxIcon"
import { UseZustandStore } from "@/store/ui/ui-store";
import clsx from "clsx";



const items = [
    { text: "Dashboard", icon: <LuPieChart size={20} /> },
    { text: "Analytics", icon: <LuBrainCog size={20} /> },
    { text: "Reports", icon: <LuChevronRight size={20} /> },
    // Agrega más elementos según sea necesario
];

export const Sidebar2 = () => {
    const { isOpenSideMenu, toggleSideMenu } = UseZustandStore();
    return (
        <div
            className={clsx(
                "bg-gray-800 text-white relative flex flex-col justify-center items-center transition-width duration-700",
                { "w-[80px]": isOpenSideMenu, "w-[180px]": !isOpenSideMenu } // Opened
            )}
        >
            {/* Cabecera */}
            <header className="py-4 px-6">
                <p>Cabecera</p>
            </header>

            {/* Cuerpo con scroll */}
            <main className="flex-1 overflow-y-auto p-6">
                <div className="h-[calc(100vh - 180px)]flex flex-col items-center">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-row items-center mb-2 w-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-rgb-50 hover:shadow-md hover:bg-gray-100 rounded-lg hover:text-black">
                        {/* Icono */}
                        <div className="w-[40px] h-[40px] rounded-md flex justify-center items-center">
                            <BoxIcon icon={item.icon} />
                        </div>
                        {/* Texto */}
                        {!isOpenSideMenu && <p className="mx-2 text-sm">{item.text}</p>}
                    </div>
                    ))}
                </div>
            </main>

            {/* Botón redondo */}
            <button
                className={clsx(
                    "absolute top-0 -right-[20px] mt-4 ml-4 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-gray-600",
                    { "rotate-180": isOpenSideMenu }
                )}
                onClick={toggleSideMenu}
            >
                <LuChevronLeft size={20} />
            </button>

            {/* Footer */}
            <footer className="py-4 px-6">
                <p>Footer</p>
            </footer>
        </div>
    )
}
