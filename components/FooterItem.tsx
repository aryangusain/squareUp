import { FooterItemPropsI } from "@/types/types"


const FooterItem: React.FC<FooterItemPropsI> = ({page}) => {
  return (
    <div className="text-gray-100 font-semibold text-sm cursor-pointer hover:underline">{page}</div>
  )
}
export default FooterItem