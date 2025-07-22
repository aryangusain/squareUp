import { PropsWithChildren } from "react"

const Subheading: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="text-[24px] font-semibold">{children}</div>
  )
}
export default Subheading