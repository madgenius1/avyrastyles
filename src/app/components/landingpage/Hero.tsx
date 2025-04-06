"use client";

import Link from "next/link";
import { cormorant } from '../ui/font';


export default function Hero() {
    return (
        <main className="lg:px-12 md:p-6 p-4 min-h-screen">
            <div className="flex lg:flex-row md:flex-row flex-col lg:gap-6 md:gap-6 gap-4 ">
                <div className="lg:w-1/2 md:w-1/2 w-full">
                    <div
                        className="relative w-full flex flex-col items-center text-center justify-center p-6 gap-6 bg-[url('/assets/styleuno.png')] bg-cover bg-center h-[60vh] lg:h-[80vh] md:h-[40vh] min-h-[300px]"
                    >
                        <h2 className={`${cormorant.className} lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md`}>
                            Latest Items
                        </h2>
                        <Link
                            className="uppercase px-8 py-4 bg-amber-700 font-medium text-white hover:bg-amber-600 transition-colors duration-300 shadow-lg"
                            href="/shop"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full">
                    <div
                        className="relative w-full flex flex-col items-center text-center justify-center p-6 gap-6 bg-[url('/assets/styletwo.png')] bg-cover bg-center h-[60vh] lg:h-[80vh] md:h-[40vh] min-h-[300px]"
                    >
                        <h2 className={`${cormorant.className} lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md`}>
                            Accessorize
                        </h2>
                        <Link
                            className="uppercase px-8 py-4 bg-amber-700 font-medium text-white hover:bg-amber-600 transition-colors duration-300 shadow-lg"
                            href="/new-arrivals"
                        >
                            Explore Now
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
