import { ProcessItemPropsI } from "@/types/types"
import Paragraph from "./Paragraph"

const ProcessItem: React.FC<ProcessItemPropsI> = ({url, title, description, className}) => {
  return (
    <div className="row-span-1 col-span-1 border-1 border-gray-600 flex flex-col gap-[40px] py-[80px] px-[40px]">
        <div className="flex w-full gap-[20px]">
            <img src={url} className="h-18" />
            <div className={`flex-1 font-semibold text-lg border-b-1 border-b-gray-600 py-[16px] self-end ${className}`}>{title}</div>
        </div>
        <Paragraph className="text-gray-200">
            {description}
        </Paragraph>
    </div>
  )
}
export default ProcessItem