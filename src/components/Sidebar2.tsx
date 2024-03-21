"use client"
import { LuBrainCog, LuChevronLeft, LuChevronRight } from "react-icons/lu"
import BoxIcon from "./BoxIcon"
import { UseZustandStore } from "@/store/ui/ui-store";
import clsx from "clsx";

export const Sidebar2 = () => {
    const { isOpenSideMenu, toggleSideMenu } = UseZustandStore();
    return (
        <div
            className={clsx(
                "bg-gray-800 text-white relative flex flex-col justify-center items-center transition-width duration-700",
                { "w-[100px]": isOpenSideMenu, "w-[250px]": !isOpenSideMenu } // Opened
            )}
        >
            {/* Cabecera */}
            <header className="py-4 px-6">
                <p>Cabecera</p>
            </header>

            {/* Cuerpo con scroll */}
            <main className="flex-1 overflow-y-auto p-6">
                <div className="h-[calc(100vh - 180px)] bg-gray-700 flex flex-col items-center">
                    <div className="flex flex-row items-center w-full">
                        {/* Icono */}
                        <div className="w-[40px] h-[40px] rounded-md flex justify-center items-center">
                            <BoxIcon icon={<LuBrainCog size={30} />} backgorundColor="GRAY" />
                        </div>
                        {/* Texto */}
                        {!isOpenSideMenu && <p className="ml-2">Texto</p>}
                    </div>
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
                <LuChevronLeft  size={20} />
            </button>

            {/* Footer */}
            <footer className="py-4 px-6">
                <p>Footer</p>
            </footer>
        </div>
    )
}
