"use client"

import Button from "./Button"
import NavbarItem from "./NavbarItem"
import { Page } from "@/types/types"
import Link from "next/link"

import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname();

    const items: Page[] = ["Home", "Services", "Work", "Process", "About"]
    const routes = ["/", "/services", "/work", "/process", '/about']

    return (
        <div className="w-full flex justify-between items-center px-[80px] py-[20px] border-b-1 border-b-gray-600">
            <img src={"/logo-desktop.png"} className="h-10 cursor-pointer" alt="logo"/>
            <div className="flex">
                {
                    items.map((item, index) => {
                        const route = routes[index];
                        const selected = (pathname === route);
                        console.log(pathname);

                        return (
                            <Link href={route} key={index}>
                                <NavbarItem
                                    page={item}
                                    selected={selected}
                                />
                            </Link>
                        )
                    })
                }
            </div>
            <Button variant="primary">Contact Us</Button>
        </div>
    )
}

export default Navbar