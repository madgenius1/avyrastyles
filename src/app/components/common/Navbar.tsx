"use client";

import Link from 'next/link';
import { useState } from 'react';
import { cormorant } from '../ui/font';
import { FiShoppingCart } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars2 } from 'react-icons/hi2';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="flex flex-row items-center justify-between px-6 py-4 lg:px-12 z-50 bg-[#FDFDF8] relative">
            {/* Logo */}
            <div>
                <Link href="/" className={`${cormorant.className} text-gray-900 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase leading-relaxed`}>
                    Avyra Styles
                </Link>
            </div>

            {/* Links for larger screens */}
            <div className="hidden sm:flex md:flex flex-row gap-4 items-center">
                <Link href="/shop" className="text-gray-800 font-medium capitalize">Shop</Link>
                <Link href="/categories" className="text-gray-800 font-medium capitalize">Categories</Link>
                <Link href="/about-us" className="text-gray-800 font-medium capitalize">Our Story</Link>
                <Link href="/contact" className="text-gray-800 font-medium capitalize">Contact</Link>
            </div>

            {/* Account and Cart */}
            <div className="hidden sm:flex md:flex flex-row gap-4 mx-2 items-center">
                <Link href="/login" className="text-gray-800 font-medium capitalize">Log In</Link>
                <Link href="/cart" className="text-gray-800 flex flex-row items-center gap-1">
                    <FiShoppingCart size={18} />
                    <span className="text-gray-800 text-sm">0</span>
                </Link>
            </div>

            {/* Hamburger Menu */}
            <div className="sm:hidden md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 font-medium">
                    {menuOpen ? <IoMdClose size={30} /> : <HiOutlineBars2 size={30} />}
                </button>

                {menuOpen && (
                    <div className="fixed inset-0 bg-white flex flex-col items-center p-6 z-50">
                        <button onClick={closeMenu} className="text-gray-800 self-end">
                            <IoMdClose size={32} />
                        </button>
                        <ul className="flex flex-col gap-6 mt-6 text-right w-3/4 capitalize">
                            <li><Link href="/shop" className="text-gray-800 font-medium " onClick={closeMenu}>Shop</Link></li>
                            <li><Link href="/categories" className="text-gray-800 font-medium " onClick={closeMenu}>Categories</Link></li>
                            <li><Link href="/about-us" className="text-gray-800 font-medium " onClick={closeMenu}>Our Story</Link></li>
                            <li><Link href="/contact" className="text-gray-800 font-medium " onClick={closeMenu}>Contact</Link></li>
                            <li className="flex flex-row gap-4 justify-end mt-4">
                                <Link href="/facebook" className="text-gray-800" onClick={closeMenu}><FaFacebook size={30} /></Link>
                                <Link href="/instagram" className="text-gray-800" onClick={closeMenu}><FaInstagram size={30} /></Link>
                                <Link href="/tiktok" className="text-gray-800" onClick={closeMenu}><FaTiktok size={30} /></Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
