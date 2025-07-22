import Heading from "./Heading"
import Paragraph from "./Paragraph"
import SectionBanner from "./SectionBanner"
import ServicesCard from "./ServicesCard"

const Services = () => {

    const services = [
        {
            url: "/brush.png",
            title: "Design",
            description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        },
        {
            url: "/puzzle.png",
            title: "Engineering",
            description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        },
        {
            url: "battery.png",
            title: "Project Management",
            description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        }
    ]

    return (
        <div>
            <SectionBanner>
                <Heading>Our Services</Heading>
                <Paragraph className="text-center">Transform your brand with our innovative digital solutions that captivate and engage your audience.</Paragraph>
            </SectionBanner>
            <div className="grid grid-cols-3 grid-row-1">
                {
                    services.map((service, index) => {
                        return <ServicesCard key={index} title={service.title} description={service.description} url={service.url}/>
                    })
                }
            </div>
        </div>
    )
}
export default Services