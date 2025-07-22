import FooterBanner from "@/components/FooterBanner"
import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import SectionBanner from "@/components/SectionBanner"

const Work = () => {
  return (
    <div>
      <SectionBanner>
          <Heading>Our Works</Heading>
          <Paragraph className="text-center">Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</Paragraph>
      </SectionBanner>
      <FooterBanner />
    </div>
  )
}
export default Work