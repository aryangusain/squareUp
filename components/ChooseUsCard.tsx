import { ServicesCardPropsI } from "@/types/types"
import Subheading from "./Subheading"
import Paragraph from "./Paragraph"
import MinorHeading from "./MinorHeading"

const ChooseUsCard: React.FC<ServicesCardPropsI> = ({url, title, description}) => {
  return (
    <div className="row-span-1 col-span-1 flex flex-col p-[60px] gap-[30px] border-1 border-gray-600">
        <div className="flex items-center gap-[14px]">
            <img src={url} className="h-16 w-16" />
            <MinorHeading>{title}</MinorHeading>
        </div>
        <Paragraph>{description}</Paragraph>
    </div>
  )
}
export default ChooseUsCard