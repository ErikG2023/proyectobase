import { Card1 } from "@/components/cards/Card1";
import { Card2 } from "@/components/cards/Card2";
import CardGradient from "@/components/cards/CardGradient";
import Image from "next/image";
import { FaCheck, FaRegUser } from "react-icons/fa";
import image from "../../../public/welcome2.svg";
import Card3 from "@/components/cards/Card3";

export default function Home() {
    return (
        <>
            {/* 
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Users</h2>
                    <p className="text-3xl font-bold text-indigo-500 mt-2">1,234</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Revenue</h2>
                    <p className="text-3xl font-bold text-green-500 mt-2">$50,000</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
                    <p className="text-3xl font-bold text-blue-500 mt-2">500</p>
                </div>
            </div> */}

            {/* <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                <Card3
                    backgorundColor="bg-gradient-to-br from-green-500 to-blue-500"
                    description="pruebaasdasdad"
                    icon={<FaCheck className="text-white" />}
                    percent="85%"
                    title="Project Completion"
                />

            </div> */}

            {/* <div className="grid gap-y-10 gap-x-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-4">
                <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-8 grid h-16 w-16 place-items-center">
                        <FaRegUser className="text-white" size={25} />
                    </div>
                    <div className="flex flex-col ml-24 text-left mb-4">
                        <p className="antialiased text-sm font-normal text-blue-gray-600">Bienvenido</p>
                        <h4 className="antialiased text-2xl font-semibold leading-snug text-blue-gray-900">Erik Gonzalez</h4>
                    </div>
                </div>
            </div> */}


            <div className="flex justify-between items-center md:max-w-4xl bg-blue-500/15 rounded-xl overflow-visible h-24">
                <div>
                    <p className="ml-7 text-md font-bold md:text-2xl text-blue-800">Welcome Erik Gonzalez</p>
                </div>
                <div className="ml-4 relative top-1 ">
                    <Image src={image} width={190} alt="" />
                </div>
            </div>


            <div className="mt-8" />

            <div className="flex items-center justify-center">
                <div className="max-w-screen-2xl w-full px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <CardGradient
                            backgorundColor="bg-gradient-to-br from-green-500 to-blue-500"
                            description="pruebaasdasdad"
                            icon={<FaCheck className="text-blue-500" />}
                            percent="85%"
                            title="Project Completion"
                        />

                        <CardGradient
                            backgorundColor="bg-gradient-to-r from-blue-500 to-blue-700"
                            description="pruebaasdasdad"
                            icon={<FaCheck className="text-blue-500" />}
                            percent="85%"
                            title="Project Completion"
                        />

                        <CardGradient
                            backgorundColor="bg-gradient-to-r from-purple-600 to-pink-500"
                            description="pruebaasdasdad"
                            icon={<FaCheck className="text-blue-500" />}
                            percent="85%"
                            title="Project Completion"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6" />
        </>
    );
}
