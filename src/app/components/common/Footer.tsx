"use client"

import Link from 'next/link';

import { cormorant } from '../ui/font';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


export default function Footer() {
    return (
        <main className=" bg-[#C4725B]">
            <hr className='lg:p-12 p-4 border-white font-bold' />
            <div className="text-white flex lg:flex-row md:flex-row flex-col justify-between lg:py-12 lg:px-8 md:py-6 p-6 gap-4 md:gap-6 lg:gap-6 w-full">
                {/* Left Content */}
                <div className="flex lg:flex-row md:flex-row flex-col gap-4 lg:gap-6 justify-between lg:w-1/2 md:w-1/2 w-full">
                    {/* Connect */}
                    <div className="flex flex-col gap-4 lg:py-6 py-4 ">
                        <h1 className={`${cormorant.className} text-2xl lg:text-4xl md:text-3xl font-mediumm uppercase`}>Connect</h1>
                        <div className="flex flex-row gap-3 lg:py-6 py-4">
                            <Link href="mailto:info@avyrastyles.co.ke" target='blank' className='transition duration-200 ease-in-out hover:scale-110'>
                                <HiOutlineMail size={20} color='white' />
                            </Link>
                            <Link href="https://www.instagram.com/avyra_styles_ke/" target='blank' className='transition duration-200 ease-in-out hover:scale-110'>
                                <FaInstagram size={20} color='white' />
                            </Link>
                            <Link href="https://www.facebook.com/share/16CuWtikof/?mibextid=wwXIfr" target='blank' className='transition duration-200 ease-in-out hover:scale-110'>
                                <FaFacebookF size={20} color='white' />
                            </Link>
                            <Link href="https://www.tiktok.com/@avyra.styles?_t=ZM-8vKaOZw4hsb&_r=1" target='blank' className='transition duration-200 ease-in-out hover:scale-110'>
                                <FaTiktok size={20} color='white' />
                            </Link>
                        </div>
                    </div>
                    {/* Shop */}
                    <div className="flex flex-col gap-4 lg:py-6 py-4 ">
                        <h1 className={`${cormorant.className} text-2xl lg:text-4xl md:text-3xl font-mediumm uppercase`}>Shop</h1>
                        <div className="flex flex-col gap-3 lg:py-6 py-4">
                            <Link href="/shop" className='underline text-md'>
                                Shop All
                            </Link>
                            <Link href="/about-us" className='underline text-md'>
                                About
                            </Link>
                            <Link href="/contact" className='underline text-md'>
                                Contact
                            </Link>
                        </div>
                    </div>
                    {/* Info */}
                    <div className="flex flex-col gap-4 lg:py-6 py-4 ">
                        <h1 className={`${cormorant.className} text-2xl lg:text-4xl md:text-3xl font-mediumm uppercase`}>Info</h1>
                        <div className="flex flex-col gap-3 lg:py-6 py-4">
                            <Link href="/Faqs" className='underline text-md'>
                                FAQs
                            </Link>
                            <Link href="/shipping-returns" className='underline text-md'>
                                Shipping & Returns
                            </Link>
                            <Link href="/terms" className='underline text-md'>
                                Terms of Use
                            </Link>
                            <Link href="/privacy" className='underline text-md'>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Right Content */}
                <div className="flex flex-col gap-4 lg:py-6 py-4 lg:w-1/3 md:w-1/2 w-full items-start">
                    <h1 className={`${cormorant.className} text-2xl lg:text-4xl md:text-3xl font-mediumm uppercase`}>Avrya Styles Boutique Kenya</h1>
                    <div className=" lg:py-6 py-4 space-y-4 flex flex-col justify-end">
                        <span className="font-medium">
                            La Muse Women's Fashion Boutique in Kenya, since 2025, celebrates the beauty, strength, and individuality of women.
                            <br />
                        </span>
                        <span className="">
                            We offer a curated selection of contemporary designer fashion and accessories from independent brands that share our values—embracing diversity and respecting both humanity and the world we live in.
                            <br />
                        </span>
                        <span className="">
                            At Avyra Styles, you&apos;ll discover unique designs that empower women and reflect their individuality—styles you won&apos;t find anywhere else.
                            <br />
                        </span>
                    </div>
                </div>
            </div>
            <hr className='lg:px-12 p-4 border-white font-bold' />



        </main>
    )
}