"use client"



export default function Navbar() {
    return (
        <main className="flex flex-row items-center justify-between px-6 py-10 shadow-md">
            <div className="sm:hidden lg:block flex lg:flex-row">
                <h2 className="text-gray-900 font-semibold">
                    Logo Text
                </h2>
            </div>
            <div className="sm:hidden lg:block flex lg:flex-row">
                <h2 className="text-gray-900 font-semibold">
                    Link List 3 items
                </h2>
            </div>
            <div className="sm:hidden lg:block flex lg:flex-row">
                <h2 className="text-gray-900 font-semibold">
                    List icons 2 items | Sign Up and Cart
                </h2>
            </div>
        </main>
    )
}