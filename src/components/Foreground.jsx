import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            description: "Coding like poetry should be short and concise",
            fileSize: "16.7 MB",
            toggler: "close",
            tag: {
                tagTitle: "Explore",
                tagColor: "green",
                isOpen: true
            }

        },
        {
            description: "The function of good software is to make the complex appear to be simple",
            fileSize: "2.6 MB",
            toggler: "download",
            tag: {
                tagTitle: "",
                tagColor: "green",
                isOpen: false
            }

        },
        {
            description: "Programming isn't about what you know; it's about what you can figure out",
            fileSize: "125 MB",
            toggler: "close",
            tag: {
                tagTitle: "Download Now",
                tagColor: "gold",
                isOpen: true

            }

        },
        {
            description: "Make 10x steps through the power of focus",
            fileSize: "708 KB",
            toggler: "download",
            tag: {
                tagTitle: "Download",
                tagColor: "blue",
                isOpen: false
            }

        }
    ];

    return (
        <div ref={ref} className="w-full h-screen top-0 left-0 absolute flex gap-4 flex-wrap p-5 ">
            {data.map((item) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground