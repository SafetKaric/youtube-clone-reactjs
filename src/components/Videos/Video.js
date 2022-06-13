const Video = (props) => {
    const { title, channell, thumbnail } = props
    const classList =
        'w-10 h-10 rounded-full bg-[url("' + thumbnail + '")] bg-cover mr-3'
    return (
        <div className="bg-yt-main-bg w-full min-w-[240px] max-w-[360px] text-white cursor-pointer">
            <div className="mb-2">
                <img src="./images/BigBuckBunny.jpg" alt="bg1.png" />
            </div>
            <div className="flex">
                <div className={classList}></div>
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
