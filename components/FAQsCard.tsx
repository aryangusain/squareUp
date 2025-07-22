"use client"
import { FAQsCardPropsI } from "@/types/types";
import { useState } from "react"
import Paragraph from "./Paragraph";
import { motion, AnimatePresence } from "framer-motion";

const FAQsCard: React.FC<FAQsCardPropsI> = ({title, description}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`h-fit flex flex-col justify-center border-1 border-gray-600 gap-[20px] px-[40px] py-[30px]`}>
        <div className={`flex justify-between gap-[20px] ${open ? " text-green-600 " : " text-white "} duration-200`}>
            <div>{title}</div>
            <div>
            <img
                src="/close.png"
                onClick={() => setOpen(false)}
                className={`${open ? "h-5" : "h-0"} transition-all duration-200`}
            />
            <img
                src="/open.png"
                onClick={() => setOpen(true)}
                className={`${open ? "h-0" : "h-5"} transition-all duration-200`}
            />
            </div>
        </div>

        <AnimatePresence initial={false}>
            {open && (
            <motion.div
                key="description"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Paragraph className="h-fit opacity-100">{description}</Paragraph>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    )
}
export default FAQsCard