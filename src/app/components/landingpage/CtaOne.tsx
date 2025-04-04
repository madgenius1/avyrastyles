

import { cormorant } from '../ui/font';

//Add code to extend the sentences across the divs.
export default function CtaOne() {
    return (
        <main className="lg:px-12 md:p-6 p-4 w-full">
            <div className="bg-[#F6E4D0] flex flex-col w-full item-center justify-center text-center">
                <p className={`${cormorant.className} text-gray-800 lg:text-5xl md:text-3xl text-xl font-light uppercase mt-4 justify-stretch `}>
                    Your go-to fashion stop:
                </p>
                <h3 className={`${cormorant.className} text-gray-900 font-extrabold lg:text-7xl md:text-5xl text-2xl uppercase leading-loose `}>
                    Avyra Styles
                </h3>
            </div>
        </main>
    )
}