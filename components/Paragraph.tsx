import { ExtendClassnamesI } from "@/types/types"
import { PropsWithChildren } from "react"

const Paragraph: React.FC<PropsWithChildren<ExtendClassnamesI>> = ({children, className}) => {
  return (
    <div className={"text-[14px] text-gray-100 " + className}>{children}</div>
  )
}
export default Paragraph