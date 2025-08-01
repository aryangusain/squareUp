import { NavbarItemPropsI } from "@/types/types"

const NavbarItem: React.FC<NavbarItemPropsI> = ({ selected, page }) => {
    return (
        <div className={`text-white font-semibold text-sm px-[22px] py-[12px] cursor-pointer ease-out duration-200 ${selected ? "rounded-[6px] bg-gray-700" : ""}`} >
            {page}
        </div>
    );
};

export default NavbarItem