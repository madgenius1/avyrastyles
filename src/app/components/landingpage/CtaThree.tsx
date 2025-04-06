

import { cormorant } from '../ui/font';
import Link from 'next/link';

//Add code to extend the sentences across the divs.
export default function CtaThree() {
    return (
        <div className="lg:py-6">
            <main className="lg:px-12 md:p-6 p-4 w-full">
                <div className="bg-[#C4725B] flex flex-col w-full item-center justify-center text-center">
                    <p className={`${cormorant.className} text-white lg:text-5xl md:text-3xl text-xl font-light uppercase mt-4 justify-stretch `}>
                        Your go-to fashion stop:
                    </p>
                    <h3 className={`${cormorant.className} text-white font-extrabold lg:text-7xl md:text-5xl text-2xl uppercase leading-loose `}>
                        Avyra Styles
                    </h3>
                </div>
            </main>
        </div>
    )
}