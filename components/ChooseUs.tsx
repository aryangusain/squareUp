import ChooseUsCard from "./ChooseUsCard"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import SectionBanner from "./SectionBanner"

const ChooseUs = () => {
    const points = [
        {
            url: "/expertise.png",
            title: "Expertise",
            description: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.   ",
        },
        {
            url: "/client.png",
            title: "Client-Centric Approach",
            description: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
        },
        {
            url: "result.png",
            title: "Result-Driven Solutions",
            description: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
        },
        {
            url: "collaboration.png",
            title: "Collaborative Partnership",
            description: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
        },
    ]

    return (
        <div>
            <SectionBanner>
                <Heading>Why Choose SquareUp?</Heading>
                <Paragraph className="text-center">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</Paragraph>
            </SectionBanner>
                <div className="grid grid-rows-2 grid-cols-2">
                    {
                        points.map((point, index) => {
                            return <ChooseUsCard key={index} title={point.title} description={point.description} url={point.url}/>
                        })
                    }
                </div>
        </div>
    )
}
export default ChooseUs