const Video = (props) => {
    const { title, channell, thumbnail } = props
    return (
        <div className="bg-yt-main-bg w-full min-w-[240px] max-w-[360px] text-white cursor-pointer">
            <div className="mb-2">
                <img src={thumbnail} alt="bg1.png" />
            </div>
            <div className="flex">
                <div className="w-10 h-10 rounded-full bg-cover mr-3">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="rounded-full w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div>
                        <h1 className="text-md uppercase font-semibold mb-1">
                            {title}
                        </h1>
                    </div>
                    <div className="text-video-info text-[0.8rem] font-roboto">
                        <p>{channell}</p>
                        <p>452K views &middot; 3 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
