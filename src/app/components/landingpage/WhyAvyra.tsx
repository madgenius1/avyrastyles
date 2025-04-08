

import { FaCheck } from "react-icons/fa6";
import { cormorant } from '../ui/font';

const things = [
    { icon: <FaCheck className="text-green-500" size={24} />, text: "Trendy, High Quality Pieces " },
    { icon: <FaCheck className="text-green-500" size={24} />, text: "Fast Delivery + M-Pesa Pay" },
    { icon: <FaCheck className="text-green-500" size={24} />, text: "Direct WhatsApp Orders" },
    { icon: <FaCheck className="text-green-500" size={24} />, text: "100% Slay Guarantee" }
]


export default function WhyAvyra() {
    return (
        <main className="lg:py-4 py-4">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 lg:gap-6 lg:px-12 md:p-6 p-4 w-full">
                <div className="lg:w-1/2 w-full lg:h-[40vh] md:h-[40vh] h-[40vh] flex flex-col gap-4 ">
                    <div className="">
                        <h2 className={`${cormorant.className} text-start text-gray-900 font-bold lg:text-5xl md:text-3xl text-xl leading-relaxed uppercase`}>
                            Why Shop With Avyra Styles?
                        </h2>
                    </div>
                    <div className="flex flex-col items-start gap-4 py-4 ">
                        {things.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                {item.icon}
                                <span className={`text-gray-900 lg:text-2xl md:text-xl text-md`}>
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 w-full bg-[url('/assets/whyavyra.png')] bg-cover bg-center lg:h-[40vh] md:h-[40vh] h-[35vh] ">
                </div>
            </div>
        </main>

    )
}