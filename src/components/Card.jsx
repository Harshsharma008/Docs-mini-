
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"
function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} className='flex-shrink-0 relative w-60 h-72 rounded-[60px] px-8 py-10 bg-zinc-900/90 text-white p-5 overflow-hidden '>
            <FaRegFileAlt />
            <p className="leading-tight font-semibold text-xs mt-5 text-stone-400">{data.desc}</p>
            <div className="footer  absolute bottom-0 w-full   left-0">
                <div className="mx-5 items-center flex justify-between py-4 mb-2 px-8">
                    <h5>{data.filesize}</h5>
                    <span className="w-7 h-7 bg-zinc-400 rounded-full flex items-center justify-center">
                        {data.close ? <IoClose /> : <LuDownload size='.7em' color="#000" />}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-500"} justify-center`} >
                        <h3 className="flex justify-center text-md">{data.tag.tagTitle}</h3>
                    </div>)}

            </div>

        </motion.div>

    );
}

export default Card