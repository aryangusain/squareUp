import { SubsectionHeadingPropsI } from "@/types/types"

const SubsectionHeading: React.FC<SubsectionHeadingPropsI> = ({ title }) => {
  return (
    <div className="border-b-1 border-b-gray-600 text-[20px] py-[40px] px-[50px] text-left text-gray-200">
      {title}
    </div>
  )
}
export default SubsectionHeading