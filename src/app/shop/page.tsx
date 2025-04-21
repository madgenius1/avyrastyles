"use client"


import { productItems } from "../lib/data"
import Image from "next/image"

export default function Page() {
    return (
        <main className="lg:pt-6">
            <div className="lg:px-12 md:p-6 p-4 w-full">
                <div className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-6 gap-4">
                    <div className="w-full md:w-1/4 lg:1/4 py-4 sticky top-0 h-screen md:h-auto lg:h-auto overflow-y-auto ">
                        <div className="px-4 sm:flex flex-col hidden lg:block md:block gap-4">
                            <ul className="text-gray-800 space-y-4 p-2 uppercase">
                                <li className="p-2">Search</li>
                                <hr className="border border-gray-500" />
                                <li className="p-2">Categories</li>
                                <hr className="border border-gray-500" />
                                <li className="p-2">Color</li>
                                <hr className="border border-gray-500" />
                                <li className="p-2">Mood</li>
                                <hr className="border border-gray-500" />
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 lg:3/4 py-4 lg:h-screen h-auto overflow-y-auto">
                        <div className="px-2">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-2 justify-between">
                                {productItems.map((item) => (
                                    <div key={item.id} className=" py-4 space-y-2">
                                        <Image src={item.imageUrl} alt={item.name} width={300} height={200} className="w-full h-96 object-cover object-center border" />
                                        <h2 className="font-medium text-gray-800 mt-2 lg:text-lg text-md">{item.name}</h2>
                                        <p className="text-gray-600 lg:text-md text-sm">{item.description}</p>
                                        <p className="text-gray-600 lg:text-md text-sm font-light">{item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

