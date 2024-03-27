import { Card1 } from "@/components/cards/Card1";
import { Card2 } from "@/components/cards/Card2";
import CardGradient from "@/components/cards/CardGradient";
import Image from "next/image";
import { FaCheck, FaRegUser } from "react-icons/fa";
import image from "../../../public/welcome2.svg";
import Card3 from "@/components/cards/Card3";
import CardSecond from "@/components/cards/final/CardSecond";
import CardHead from "@/components/cards/final/CardHead";
import CardForma from "@/components/cards/final/CardForma";


export default function Home() {

    return (
        <>

            <CardHead
                title="Hola Erik Gonzalez"
                subtitle="Bienvenido al Dashboard"
                image={<Image src={image} width={150} alt="" />}
            />


            <div className="grid grid-rows-1 md:grid-rows-2 grid-cols-1 lg:grid-cols-5 gap-4 mt-4">

                <div className="flex-shrink-0 relative overflow-hidden bg-teal-500 shadow-lg p-6 md:p-10 rounded-xl col-span-1 lg:col-span-2 row-span-1 md:row-span-2 flex flex-col items-center justify-center text-center">

                    <CardForma
                        title="Actualmente"
                        amount={120}
                        backgroundCircle="bg-gradient-to-br from-blue-500 to-indigo-600"
                        subtitle="Personal Eventual Spot"
                    />

                </div>

                <div className="rounded-xl col-span-1 lg:col-span-3">

                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">

                        <div className="md:col-span-2 lg:col-span-1">
                            <CardSecond
                                title="MLP"
                                amount={60}
                                backgorundColor="bg-white"
                                description="Personal Vigente"
                                percent="50%"
                            />
                        </div>
                        <div className="md:col-span-1 lg:col-span-1">
                            <CardSecond
                                title="MLP"
                                amount={60}
                                backgorundColor="bg-white"
                                description="Personal Vigente"
                                percent="50%"
                            />
                        </div>
                        <div className="md:col-span-1 lg:col-span-1">
                            <CardSecond
                                title="MLP"
                                amount={60}
                                backgorundColor="bg-white"
                                description="Personal Vigente"
                                percent="50%"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
