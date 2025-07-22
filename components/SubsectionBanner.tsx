import { SubsectionBannerPropsI } from "@/types/types"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

const SubsectionBanner: React.FC<SubsectionBannerPropsI> = ({title, description, subtitle}) => {
  return (
    <div className="flex flex-col justify-between gap-[40px] pl-[50px] pr-[200px] pt-[80px] pb-[40px] border-b-1 border-b-gray-600">
        <div className="flex flex-col items-start  gap-[10px]">
            <Heading>{title}</Heading>
            <Paragraph>{description}</Paragraph>
        </div>
        <div className="p-[10px] bg-gray-700 w-fit rounded-[8px] text-[14px]">{subtitle}</div>
    </div>
  )
}

export default SubsectionBanner