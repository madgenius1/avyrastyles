


export default function StoryComponent() {
    return(
        <div className="min-h-screen lg:py-6">
            <div className="flex flex-col lg:flex-row md:flex-row gap-4">
                <div className="lg:w-1/2 md:w-1/2 w-full p-4">
                    <h3 className="text-center text-gray-900">
                        Left Story Content
                    </h3>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full p-4">
                    <h3 className="text-center text-gray-900">
                        Right Story Content
                    </h3>
                </div>
            </div>
        </div>
    )
}
