import { PropsWithChildren } from "react"
import { ButtonPropsI, ExtendClassnamesI } from "@/types/types"

const Button: React.FC<PropsWithChildren<ButtonPropsI>> = ({variant, children, className}) => {
    const variantStyle = {
        "primary": " text-black bg-green-800 border-1 border-green-800 hover:bg-green-600 ",
        "secondary": " text-gray-100 bg-gray-800 border-1 border-gray-600 hover:bg-gray-600 "
    }

    return (
        <div className={" text-sm font-semibold cursor-pointer px-[18px] py-[12px] rounded-[6px] ease-out duration-200 " + className + (variant ? variantStyle[variant]: "")}>
            {children}
        </div>
    )
}

export default Button