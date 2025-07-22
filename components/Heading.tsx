import { PropsWithChildren } from "react"

const Heading: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="text-center text-[30px] font-semibold font-white">{children}</div>
  )
}
export default Heading