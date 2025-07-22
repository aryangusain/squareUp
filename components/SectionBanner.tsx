import { PropsWithChildren } from "react"

const SectionBanner: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="px-[250px] py-[100px] flex flex-col gap-[10px] justify-center items-center border-b-1 border-b-gray-600">
        {children}
    </div>
  )
}
export default SectionBanner