

import { cormorant } from '../ui/font';
import Image from 'next/image';

const components = [
    { imageUrl: "/assets/deliveries.png", imageAlt: "Deliveries", title: "Deliveries", text: "Deliveries are made to your doorstep." },
    { imageUrl: "/assets/returns.png", imageAlt: "Returns", title: "Returns", text: "Return items within 3 days." },
    { imageUrl: "/assets/payment.png", imageAlt: "Payment", title: "Secured Payment", text: "Thanks to our secure interface, you can order with complete peace of mind." },
]

export default function CtaThree() {
    return (
        <div className="lg:py-6">
            <div className="w-full lg:py-12 md:py-6 py-4">
                <div className="bg-[#F6E4D0] lg:p-12 md:p-6 p-4 flex lg:flex-row justify-between flex-col w-full item-center text-center">
                    {components.map((component, index) => (
                        <div key={index} className="lg:w-1/3 md:w-1/3 w-full p-4 flex flex-col items-center justify-center gap-4 lg:gap-8 space-y-4">
                            <Image src={component.imageUrl} alt={component.imageAlt} width={100} height={100} className="w-16 h-16" />
                            <h3 className={`${cormorant.className} text-[#121212] lg:text-4xl md:text-2xl text-lg font-semibold uppercase`}>
                                {component.title}
                            </h3>
                            <p className={`text-gray-800 font-medium text-sm`}>
                                {component.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}