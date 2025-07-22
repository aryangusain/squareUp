import { ServicesCardPropsI } from "@/types/types"
import Subheading from "./Subheading"
import Paragraph from "./Paragraph"

const ServicesCard: React.FC<ServicesCardPropsI> = ({url, title, description}) => {
  return (
    <div className="row-span-1 col-span-1 flex flex-col justify-between p-[40px] gap-[60px] border-1 border-gray-600">
        <div className="flex flex-col gap-[30px]">
            <img src={url} className="h-16 w-16"/>
            <div className="flex flex-col gap-[14px]">
                <Subheading>{title}</Subheading>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
        <button className="text-sm font-semibold cursor-pointer px-[18px] py-[12px] rounded-[6px] ease-out duration-200 bg-gray-600 w-full hover:bg-gray-500">Learn More</button>
    </div>
  )
}
export default ServicesCard