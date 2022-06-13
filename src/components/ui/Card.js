const Card = () => {
    return (
        <div className="w-full h-14 shadow-md flex items-center px-4">
            <div className="flex-1 text-2xl font-semibold dark:text-red-500 text-emerald-500">
                SKWeb-Dev
            </div>
            <div className="flex-1 flex justify-end hover:cursor-pointer sm:hidden">
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1"
                        y1="24"
                        x2="24"
                        y2="24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <line
                        x1="1"
                        y1="12"
                        x2="24"
                        y2="12"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <line
                        x1="1"
                        y1="1"
                        x2="24"
                        y2="1"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Card
