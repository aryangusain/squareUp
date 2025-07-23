import { WorkCardPropsI } from "@/types/types"
import Paragraph from "./Paragraph"
import { desc } from "framer-motion/client"

const WorkCard: React.FC<WorkCardPropsI> = ({title, url, img, description, name}) => {
  return (
    <div className="col-span-1 row-span-1 border-r-1 border-b-1 border-gray-600">
        <div className="border-b-1 border-r-1 border-gray-600 py-[24px] px-[40px] text-left text-gray-200">{title}</div>
        <div className="pt-[30px] pb-[60px] px-[40px] flex flex-col gap-[24px]">
            <img src={img} className=""/>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[8px]">
                    <div className="text-gray-100">{name}</div>
                    <div className="text-[13px] px-[12px] py-[8px] bg-gray-600 text-gray-200 rounded-[6px] cursor-pointer">{url}</div>
                </div>
                <img src={'/arrow.png'} className="h-8 cursor-pointer bg-gray-600 p-[4px] rounded-[4px]" />
            </div>
            <Paragraph className="text-gray-200">{description}</Paragraph>
        </div>
    </div>
  )
}
export default WorkCard