import { cormorant } from '../ui/font';
import Link from 'next/link';

const categories = [
    { link: "/swimwear", name: "Swimwear", backgroundUrl: "/assets/swimwear.png" },
    { link: "/dresses", name: "Dresses", backgroundUrl: "/assets/dresses.png" },
    { link: "/thrift-bags", name: "Thrift Bags", backgroundUrl: "/assets/thriftbags.png" },
    { link: "/tops", name: "Tops", backgroundUrl: "/assets/tops.png" },
];

export default function Categories() {
    return (
        <div className="min-h-screen lg:pt-6">
            <div className="lg:px-12 md:p-6 p-4 w-full">
                <div className="flex flex-col gap-4">
                    <h3 className={`${cormorant.className} text-gray-900 lg:text-5xl md:text-3xl text-xl font-light leading-relaxed text-center uppercase`}>
                        Shop By Category
                    </h3>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-4 w-full">
                        <div className="lg:w-1/2 md:w-1/2 w-full grid grid-cols-1 gap-4 lg:h-[60vh] h-[50vh]">
                            <Link
                                href="/accessories"
                                className="relative flex items-center text-center justify-center bg-[url('/assets/accessories.png')] bg-cover bg-center row-span-2 h-full"
                            >
                                <span className={`${cormorant.className} lg:text-4xl md:text-3xl text-2xl text-white font-bold uppercase drop-shadow-md`}>
                                    Accessories
                                </span>
                            </Link>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                {categories.map((category, index) => (
                                    <Link
                                        key={index}
                                        href={category.link}
                                        className={`relative flex items-center text-center justify-center py-2 bg-cover bg-center h-[50vh] md:h-[30vh] lg:h-[30vh]`}
                                        style={{ backgroundImage: `url(${category.backgroundUrl})` }}
                                    >
                                        <span className={`${cormorant.className} lg:text-4xl md:text-3xl text-2xl text-white font-bold uppercase drop-shadow-md`}>
                                            {category.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
