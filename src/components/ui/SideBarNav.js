const SideBarNav = () => {
    return (
        <section className="hidden w-[74px] absolute top-14 h-full bg-yt-dark md:block">
            <div className="w-full h-full flex justify-center">
                <ul className="w-full text-white font-extralight flex flex-col items-center pt-1">
                    <li className="flex justify-center hover:bg-fields-hover-bg cursor-pointer w-full py-3">
                        <a href="/" className="flex flex-col items-center">
                            <i className="ri-home-fill text-xl"></i>
                            <p className="text-[0.7rem]">Home</p>
                        </a>
                    </li>
                    <li className="flex justify-center hover:bg-fields-hover-bg cursor-pointer w-full py-3">
                        <a href="/" className="flex flex-col items-center">
                            <i className="ri-compass-line text-xl"></i>
                            <p className="text-[0.7rem]">Explore</p>
                        </a>
                    </li>
                    <li className="flex justify-center hover:bg-fields-hover-bg cursor-pointer w-full py-3">
                        <a href="/" className="flex flex-col items-center">
                            <i className="ri-play-circle-line text-xl"></i>
                            <p className="text-[0.7rem]">Shorts</p>
                        </a>
                    </li>
                    <li className="flex justify-center hover:bg-fields-hover-bg cursor-pointer w-full py-3">
                        <a href="/" className="flex flex-col items-center">
                            <i className="ri-video-line text-xl"></i>
                            <p className="text-[0.7rem]">Subscriptions</p>
                        </a>
                    </li>
                    <li className="flex justify-center hover:bg-fields-hover-bg cursor-pointer w-full py-3">
                        <a href="/" className="flex flex-col items-center">
                            <i className="ri-folders-line text-xl"></i>
                            <p className="text-[0.7rem]">Library</p>
                        </a>
                    </li>
                    <li className="flex justify-center hover:bg-fields-hover-bg cursor-pointer w-full py-3">
                        <a href="/" className="flex flex-col items-center">
                            <i className="ri-history-line text-xl"></i>
                            <p className="text-[0.7rem]">History</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SideBarNav
