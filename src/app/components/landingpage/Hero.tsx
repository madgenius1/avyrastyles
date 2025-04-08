"use client";

import Link from "next/link";
import { cormorant } from '../ui/font';


export default function Hero() {
    return (
        <main className="min-h-screen bg-[url('/assets/herobg.png')] bg-cover bg-center p-8 ">
            <div className=" relative flex flex-col gap-4 lg:px-12 md:p-6 p-4 pt-8 ">
                <div className="lg:w-1/2 w-full flex items-center justify-start lg:py-6 lg:pb-0 py-4">
                    <h2 className={`${cormorant.className} text-3xl lg:text-8xl capitalize md:text-5xl lg:tracking-tight font-bold text-gray-900 text-left`}>
                        Slay Every Day <br />
                        With Avyra Styles
                    </h2>
                </div>
                <div className="flex flex-col lg:w-1/2 lg:p-4 w-full">
                    <p className="lg:text-xl text-md font-medium lg:text-gray-800 text-white leading-relaxed">
                        Luxury Looks, Affordable Prices, and Timeless Styles.
                    </p>
                </div>
                <div className="lg:p-4 py-6">
                    <Link href="https://www.instagram.com/avyra_styles_ke/" target="blank" className="border-2 border-white items-center text-center text-white py-3 px-6 rounded-md font-medium hover:text-gray-900 hover:bg-white hover:border-gray-800">Chat to Order</Link>
                </div>
            </div>
        </main>
    );
}
