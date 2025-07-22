"use client"

import { useState } from "react"
import Button from "./Button"
import NavbarItem from "./NavbarItem"
import { Page } from "@/types/types"

function Navbar() {
    const items: Page[] = ["Home", "Services", "Work", "Process", "About", "Careers"]
    const [currentPage, setCurrentPage] = useState<Page>("Home");

    return (
        <div className="w-full flex justify-between items-center px-[80px] py-[20px] border-b-1 border-b-gray-600">
            <img src={"/logo-desktop.png"} className="h-10" alt="logo"/>
            <div className="flex ">
                {
                    items.map((item, index) => {
                        return <NavbarItem key={index} page={item} setCurrentPage={setCurrentPage} selected={(currentPage == item)? true: false} />
                    })
                }
            </div>
            <Button variant="primary">Contact Us</Button>
        </div>
    )
}
export default Navbar