import Button from "./Button"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import SectionBanner from "./SectionBanner"

const FooterBanner = () => {
  return (
    <div>
      <SectionBanner>
        <img src={"/logo-without-text.png"} className="h-14 mb-[30px]" />
        <Heading>Let us Bring your Ideas to Life in the Digital World.</Heading>
        <Paragraph className="text-center">No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</Paragraph>
        <Button variant="primary" className="mt-[30px]" >Start Project</Button>
      </SectionBanner>
    </div>
  )
}

export default FooterBanner