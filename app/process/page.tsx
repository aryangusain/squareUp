import FooterBanner from "@/components/FooterBanner"
import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import ProcessItem from "@/components/ProcessItem"
import SectionBanner from "@/components/SectionBanner"
import SubsectionBanner from "@/components/SubsectionBanner"

const Process = () => {
  const subsectionBannerProps = {
    title: "At SquareUp",
    description: "We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.",
    subtitle: "Here's an overview of our typical process:",
  }

  const steps = [
    {
      url: "/1.png",
      title: "Discovery",
      description: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      url: "/2.png",
      title: "Planning and Strategy",
      description: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
    },
    {
      url: "/3.png",
      title: "Design",
      description: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
    },
    {
      url: "/4.png",
      title: "Development",
      description: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
    },
    {
      url: "/5.png",
      title: "Testing and Quality Assurance",
      description: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
    },
    {
      url: "/6.png",
      title: "Deployment and Launch",
      description: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
    },
    {
      url: "/7.png",
      title: "Post-Launch Support",
      description: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
    },
    {
      url: "/8.png",
      title: "Continuous Improvement",
      description: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
    },
  ]

  return (
    <div>
      <SectionBanner>
          <Heading>Process of Starting the Project</Heading>
          <Paragraph className="text-center">At SquareUp, we value transparency, collaboration, and delivering exceptional results.</Paragraph>
      </SectionBanner>
      <SubsectionBanner title={subsectionBannerProps.title} description={subsectionBannerProps.description} subtitle={subsectionBannerProps.subtitle}/>
      <div className="grid grid-cols-2">
        {
          steps.map((step, index) => {
            return <ProcessItem key={index} url={step.url} title={step.title} description={step.description} className="text-gray-200"/>
          })
        }
      </div>
      <FooterBanner />
    </div>
  )
}
export default Process