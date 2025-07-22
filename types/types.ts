
export type Page = "Home" | "Services"| "Work"| "Process"| "About"| "Careers";

export interface NavbarItemPropsI {
    selected: boolean,
    page: Page,
    setCurrentPage: React.Dispatch<React.SetStateAction<Page>>
    children?: React.ReactNode,
}

export interface ButtonPropsI extends ExtendClassnamesI{
    variant?: "primary" | "secondary"
}

export interface FooterItemPropsI {
    page: Page,
    children?: React.ReactNode
}

export interface ServicesCardPropsI {
    url: string,
    title: string,
    description: string,
    children?: React.ReactNode
}

export interface ExtendClassnamesI {
    className?: string
}

export interface TestimonialsCardPropsI {
    title: string,
    description: string,
    url: string,
    name: string,
    job_title: string,
    children?: React.ReactNode
}

export interface FAQsCardPropsI {
    title: string,
    description: string,
    children?: React.ReactNode
}