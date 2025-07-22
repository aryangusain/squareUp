import Button from "./Button"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import SectionBanner from "./SectionBanner"

const Contact = () => {
  return (
    <div>
      <SectionBanner>
      <img src={"/logo-without-text.png"} className="h-14 mb-[30px]" />
          <Heading>Thank you for your Interest in SquareUp.</Heading>
          <Paragraph className="text-center">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</Paragraph>
      <Button variant="primary" className="mt-[30px]" >Start Project</Button>
      </SectionBanner>
    </div>
  )
}

export default Contact