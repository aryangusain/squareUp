import FooterBanner from "@/components/FooterBanner"
import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import ProcessItem from "@/components/ProcessItem"
import SectionBanner from "@/components/SectionBanner"

const About = () => {
  const steps = [
    {
      url: "/1.png",
      title: "Design",
      description: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },
    {
      url: "/2.png",
      title: "Engineering",
      description: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
    },
    {
      url: "/3.png",
      title: "Project Management",
      description: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
      url: "/4.png",
      title: "Collaboration",
      description: "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
    },
    {
      url: "/5.png",
      title: "Client-Centric Approach",
      description: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
    },
    {
      url: "/6.png",
      title: "Driving Success",
      description: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
    },
  ]
  return (
    <div>
      <SectionBanner>
          <Heading>About Us</Heading>
          <Paragraph className="text-center">Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.</Paragraph>
      </SectionBanner>

      <div className="flex items-center px-[100px] py-[80px] gap-[100px] border-b-1 border-b-gray-600">
        <div className="flex flex-col gap-[16px]">
          <div className="text-left text-[30px] font-semibold font-white">About SquareUp</div>
          <Paragraph>
              SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
          </Paragraph>
        </div>
        <img src={'/abstract-2.png'} className="h-100"/>
      </div>

      <div className="border-b-1 border-b-gray-600 text-[30px] font-semibold font-white text-left py-[80px] px-[40px]">
        Our Story
      </div>

      <div className="grid grid-cols-2">
        {
          steps.map((step, index) => {
            return <ProcessItem key={index} url={step.url} title={step.title} description={step.description} className="text-green-500"/>
          })
        }
      </div>

      <FooterBanner />
    </div>
  )
}
export default About