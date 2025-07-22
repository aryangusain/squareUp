import FAQsCard from "./FAQsCard"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import SectionBanner from "./SectionBanner"

const FAQ = () => {
  const faqs = [
    {
      title: "What services does SquareUp provide?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      title: "How can SquareUp help my business?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      title: "What industries does SquareUp work with?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      title: "How long does it take to complete a project with SquareUp?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      title: "Do you offer ongoing support and maintenance after the project is completed?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      title: "Can you work with existing design or development frameworks?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      title: "How involved will I be in the project development process?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      title: "Can you help with website or app maintenance and updates?",
      description: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
  ]
  return (
    <div className="border-b-1 border-b-gray-600">
      <SectionBanner>
          <Heading>Frequently Asked Questions</Heading>
          <Paragraph className="text-center">Still you have any questions? Contact our Team via hello@squareup.com</Paragraph>
      </SectionBanner>
      <div className="flex flex-col h-fit">
        {
          faqs.map((faq, index) => {
            return <FAQsCard key={index} title={faq.title} description={faq.description}></FAQsCard>
          })
        }
      </div>
    </div>
  )
}
export default FAQ