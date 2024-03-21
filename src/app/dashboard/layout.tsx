import { Sidebar2 } from "@/components/Sidebar2";
import { SidebarMovil } from "@/components/SidebarMovil";
import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className="flex h-screen">
            
            {/* Sidebar */}
            <div className="hidden sm:flex">
                <Sidebar2 />
            </div>
            {/* Sidebar Movil*/}
            <div className="sm:hidden">
                <SidebarMovil />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
                {/* Navbar */}
                <header className="bg-gray-900 text-white py-4 px-6">
                    <h1 className="text-lg font-semibold">Navbar</h1>
                </header>

                {/* Body */}
                <main className="flex-1 p-6 bg-gray-200">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-4 px-6">
                    <p>Footer</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
