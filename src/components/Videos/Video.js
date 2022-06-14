import { useState } from 'react'

const Video = (props) => {
    const [isVideoHover, setIsVideoHover] = useState(false)
    const [isContentHover, setIsContentHover] = useState(false)
    const { title, channell, thumbnail } = props

    let classes = ''

    if (isVideoHover) console.log('Video')
    if (isContentHover) console.log('Content')

    if (isContentHover) {
        classes =
            'bg-yt-btn-bg w-full min-w-[240px] max-w-[360px] text-white cursor-pointer'
    } else {
        classes =
            'bg-yt-main-bg w-full min-w-[240px] max-w-[360px] text-white cursor-pointer'
    }

    return (
        <div
            onMouseEnter={() => setIsContentHover(true)}
            onMouseLeave={() => setIsContentHover(false)}
            className={classes}
        >
            <div
                className="mb-2"
                onMouseEnter={() => {
                    setIsContentHover(true)
                    setIsVideoHover(true)
                }}
                onMouseLeave={() => {
                    setIsContentHover(false)
                    setIsVideoHover(false)
                }}
            >
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
