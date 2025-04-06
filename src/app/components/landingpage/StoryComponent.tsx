
import { cormorant } from '../ui/font';


export default function StoryComponent() {
    return (
        <div className="lg:-mb-12 lg:pb-0">
            <div className="lg:px-12 md:p-6 p-4 min-h-screen">
                <div className="flex flex-col lg:flex-row md:flex-row gap-4">
                    <div className="lg:w-1/2 md:w-1/2 w-full p-4 bg-[url('/assets/storyimage.png')] bg-cover bg-center h-[60vh] lg:h-[80vh] md:h-[40vh] min-h-[300px]">
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full p-4 flex flex-col">
                        <h3 className={`text-center lg:text-5xl md:text-3xl text-2xl leading-loose text-gray-900 uppercase ${cormorant.className}`}>
                            Discover our story
                        </h3>
                        <div className="space-y-3">
                            <p className="leading-relaxed text-gray-800 space-y-2 py-4">
                                At Avyra Styles, fashion isn&apos;t just about what you wear—it&apos;s about how it makes you feel.
                                Our journey began with a simple passion: to help women feel confident, bold, and effortlessly beautiful in every moment. <br />
                            </p>
                            <p className='leading-relaxed text-gray-800 space-y-2 py-4'>
                                Founded with love and a dream, Avyra Styles was born out of a desire to offer unique, high-quality pieces that celebrate every curve, every mood, and every vibe.
                                From flirty bikinis to figure-hugging bodycon dresses, every item in our collection is handpicked to bring out the goddess in you. <br />
                            </p>
                            <p className='leading-relaxed text-gray-800 space-y-3 py-4'>
                                We believe that style should be accessible, empowering, and fun—whether you&apos;re soaking up the sun, stepping out for a night to remember, or simply owning your day.
                                That&apos;s why we&apos;re committed to curating fashion that fits your lifestyle and boosts your confidence, without breaking the bank. <br />
                                This is more than just a boutique—it&apos;s a movement of women embracing their beauty, one outfit at a time. Welcome to Avyra Styles.
                            </p>
                            <span className="text-gray-900 font-medium">
                                Your style. Your story.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
