"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <main className="min-h-screen mx-auto">
            <div className="flex flex-col lg:flex-row md:flex-row gap-4 lg:gap-8 md:gap-6 h-full items-center justify-between">
                {/* First Item */}
                <div className="w-full py-6 lg:w-lg xl:w-xl">
                    <div
                        className="relative w-full flex flex-col items-center text-center justify-center p-6 gap-6 bg-[url('/assets/styleuno.png')] bg-cover bg-no-repeat bg-center h-[60vh] lg:h-[80vh] min-h-[300px]"
                    >
                        <h2 className="lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md">
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

                {/* Second Item */}
                <div className="w-full py-6 lg:w-lg xl:w-xl">
                    <div
                        className="relative w-full flex flex-col items-center text-center justify-center p-6 gap-6 bg-[url('/assets/styletwo.png')] bg-cover bg-no-repeat bg-center h-[60vh] lg:h-[80vh] min-h-[300px]"
                    >
                        <h2 className="lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md">
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
