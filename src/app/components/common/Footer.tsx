"use client"

import Link from 'next/link';

import { cormorant } from '../ui/font';


export default function Footer() {
    return (
        <main className="flex flex-row items-center justify-between p-6">
            <div className="sm:hidden lg:block flex lg:flex-row">
                <Link href="/" className={`${cormorant.className} text-gray-900 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase leading-relaxed`}>
                    Avyra Styles
                </Link>
            </div>
            {/* <div className="sm:hidden lg:block flex lg:flex-row">
                <h2 className="text-gray-900 font-semibold">
                    Link List 3 items
                </h2>
            </div>
            <div className="sm:hidden lg:block flex lg:flex-row">
                <h2 className="text-gray-900 font-semibold">
                    List icons 2 items | Sign Up and Cart
                </h2>
            </div> */}
        </main>
    )
}