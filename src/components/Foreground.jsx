
import { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "hey this is the data text",
            filesize: ".9mb",
            close: "true",
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "hey this is the data text",
            filesize: ".9mb",
            close: "false",
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "hey there",
            filesize: ".9mb",
            close: "false",
            tag: { isOpen: true, tagTitle: "Jai Ho!", tagColor: "blue" },
        },
        {
            desc: "hey this is the data text",
            filesize: ".9mb",
            close: "false",
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
    ]

    return (
        <div ref={ref} className='p-10 fixed z-[3] top-0 left-0 w-full h-full flex gap-6 flex-wrap'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground