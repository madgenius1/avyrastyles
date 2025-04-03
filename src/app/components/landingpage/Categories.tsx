
import { cormorant } from '../ui/font';
import Link from 'next/link';

export default function Categories() {
    return (
        <main className="lg:px-12 md:p-6 p-4 w-full min-h-screen">
            <div className="flex flex-col gap-4">
                <h3 className={`${cormorant.className} text-gray-900 lg:text-5xl md:text-3xl text-xl font-light leading-relaxed text-center uppercase`}>
                    Shop By Category
                </h3>
                <div className="flex lg:flex-row md:flex-row flex-col gap-4">
                    <Link href="/accessories" className="relative lg:px-12 md:px-8 px-4 flex items-center text-center justify-center bg-[url('/assets/styleuno.png')] bg-cover bg-center h-[30vh] lg:h-[60vh] md:h-[30vh]">
                        <span className={`${cormorant.className} lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md`}>
                            Accessories
                        </span>
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Link href="/accessories" className="relative lg:px-12 md:px-8 px-4 flex items-center text-center justify-center bg-[url('/assets/styleuno.png')] bg-cover bg-center h-[30vh] lg:h-[30vh] md:h-[30vh]">
                            <span className={`${cormorant.className} lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md`}>
                                Swimwear
                            </span>
                        </Link>
                        <Link href="/accessories" className="relative lg:px-12 md:px-8 px-4 flex items-center text-center justify-center bg-[url('/assets/styleuno.png')] bg-cover bg-center h-[30vh] lg:h-[30vh] md:h-[30vh]">
                            <span className={`${cormorant.className} lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md`}>
                                Dresses
                            </span>
                        </Link>
                        <Link href="/accessories" className="relative lg:px-12 md:px-8 px-4 flex items-center text-center justify-center bg-[url('/assets/styleuno.png')] bg-cover bg-center h-[30vh] lg:h-[30vh] md:h-[30vh]">
                            <span className={`${cormorant.className} lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md`}>
                                Thrift Bags
                            </span>
                        </Link>
                        <Link href="/accessories" className="relative lg:px-12 md:px-8 px-4 flex items-center text-center justify-center bg-[url('/assets/styleuno.png')] bg-cover bg-center h-[30vh] lg:h-[30vh] md:h-[30vh]">
                            <span className={`${cormorant.className} lg:text-5xl md:text-4xl text-3xl text-white font-bold uppercase drop-shadow-md`}>
                                Tops
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}