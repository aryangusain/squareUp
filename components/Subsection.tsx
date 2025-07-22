import { SubsectionPropsI } from "@/types/types"
import SubsectionHeading from "./SubsectionHeading"
import SubsectionItem from "./SubsectionItem"

const Subsection: React.FC<SubsectionPropsI> = ({title, items}) => {
  return (
    <div>
        <SubsectionHeading title={title}></SubsectionHeading>
        <div className="grid grid-rows-1 grid-cols-4">
            {
                items.map((item, index) => {
                    return <SubsectionItem key={index} title={item.title} url={item.url}/>
                })
            }
        </div>
    </div>
  )
}
export default Subsection