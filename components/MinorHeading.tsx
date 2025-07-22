import { ExtendClassnamesI } from "@/types/types"
import { PropsWithChildren } from "react"

const MinorHeading: React.FC<PropsWithChildren<ExtendClassnamesI>> = ({children, className}) => {
  return (
    <div className={"text-[20px] " + className}>{children}</div>
  )
}
export default MinorHeading