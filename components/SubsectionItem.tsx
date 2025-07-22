import { SubsectionItemPropsI } from "@/types/types"

const SubsectionItem: React.FC<SubsectionItemPropsI> = ({ url, title }) => {
  return (
    <div className="row-span-1 col-span-1 flex flex-col gap-[24px] py-[40px] pl-[40px] pr-[80px] border-1 border-gray-600">
        <img src={url} className="h-12 w-12" />
        <div className="text-gray-100 text-[13px]">{title}</div>
    </div>
  )
}
export default SubsectionItem