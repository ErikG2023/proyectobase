"use client"
import { LuBrainCog, LuMenu } from "react-icons/lu";
import BoxIcon from "./BoxIcon";
import { UseZustandStore } from "@/store/ui/ui-store";
import clsx from "clsx";

export const SidebarMovil = () => {
    const { isOpenSideMenu, toggleSideMenu } = UseZustandStore();
    return (
        <div>
            <button
                className="fixed top-2 right-4 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center z-30"
                onClick={toggleSideMenu}
            >
                <LuMenu size={20} />
            </button>
            <div
                className={clsx(
                    "fixed top-0 left-0 w-full z-20 h-full bg-gray-800 text-white flex flex-col justify-center items-center transition-opacity duration-300",
                    { "opacity-100": isOpenSideMenu, "opacity-0": !isOpenSideMenu }
                )}
            >
                <header className="py-4 px-6">
                    <p>Cabecera</p>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="h-[calc(100vh - 180px)] bg-gray-700 flex flex-col items-center">
                        <div className="flex flex-row items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-md flex justify-center items-center">
                                <BoxIcon icon={<LuBrainCog size={30} />} backgorundColor="GRAY" />
                            </div>
                            <p className="ml-2">Texto</p>
                        </div>
                    </div>
                </main>
                <footer className="py-4 px-6">
                    <p>Footer</p>
                </footer>
            </div>
        </div>
    );
};