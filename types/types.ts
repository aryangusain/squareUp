
export type Page = "Home" | "Services"| "Work"| "Process"| "About" | "";

export interface NavbarItemPropsI {
    selected: boolean,
    page: Page,
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

export interface SubsectionBannerPropsI extends FAQsCardPropsI {
    subtitle: string
}

export interface SubsectionHeadingPropsI {
    title: string
}

export interface SubsectionItemPropsI {
    url: string,
    title: string
}

export interface SubsectionPropsI {
    title: string,
    items: SubsectionItemPropsI[]
}

export interface ProcessItemPropsI extends ExtendClassnamesI{
    url: string,
    title: string,
    description: string,
}

export interface WorkCardPropsI {
    title: string,
    name: string,
    url: string,
    img: string,
    description: string,
    children?: React.ReactNode
}