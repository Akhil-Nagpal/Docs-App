import React from 'react'
import { BsFileEarmarkText } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
        className=' card relative w-56 h-64 rounded-[40px] bg-zinc-900/80 
        text-zinc-100 px-6 py-7 overflow-hidden'>

            <BsFileEarmarkText className='text-zinc-400' />

            <p className=' text-md leading-4 mt-6 font-normal '>
                {data.description}
            </p>

            <div className="footer w-full absolute bottom-0
            left-0 ">
                <div className='flex items-center justify-between px-6 py-3 mb-2'>
                    <h5 className=' text-sm'> {data.fileSize} </h5>
                    <span className='w-6 h-6 bg-zinc-800 flex 
                    rounded-full justify-center items-center'>
                        {data.toggler === "close" ? <MdOutlineClose /> : <MdOutlineFileDownload />}
                    </span>
                </div>

                {data.tag.isOpen && (
                    <div className={`tag w-full py-2 flex justify-center items-center ${data.tag.tagColor === "green" ? "bg-green-600" : " bg-yellow-500"}`}>
                        <h5 className=' tracking-wider text-md font-semibold'>
                            {data.tag.tagTitle}
                        </h5>
                    </div>)}

            </div>
        </motion.div>
    )
}

export default Card