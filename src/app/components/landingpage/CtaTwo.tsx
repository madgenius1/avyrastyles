

import { cormorant } from '../ui/font';
import Link from 'next/link';

//Add code to extend the sentences across the divs.
export default function CtaTwo() {
    return (
        <div className="lg:pb-6">
            <div className="lg:px-12 md:p-6 p-4 w-full">
                <div className="bg-[#C4725B] flex flex-col w-full item-center justify-center text-center gap-4 lg:py-16 p-4">
                    <div className="p-4 space-y-4">
                        <p className={`${cormorant.className} text-white lg:text-5xl md:text-3xl text-2xl font-semibold uppercase mt-4  `}>
                            Subscribe and Get 10% Off!
                        </p>
                        <h3 className={` text-white font-medium text-sm `}>
                            Sign up with your email address to recieve news, updates, and offers.
                        </h3>
                    </div>
                    <div className="px-4 py-8">
                        <form action="POST" className='flex lg:flex-row flex-col gap-4 items-center justify-center'>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full lg:w-1/4 p-6 text-gray-700 bg-gray-100 font-medium focus:outline-none focus:ring focus:ring-white focus:border-transparent transition duration-300 ease-in-out"
                            />
                            <Link href="/signup" className="bg-[#F6E4D0] text-[#C4725B] uppercase text-sm font-medium p-6 transition duration-300 ease-in-out">
                                Sign Up
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}