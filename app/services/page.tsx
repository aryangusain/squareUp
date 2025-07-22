import FooterBanner from "@/components/FooterBanner"
import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import SectionBanner from "@/components/SectionBanner"
import SubsectionBanner from "@/components/SubsectionBanner"
import Subsection from "@/components/Subsection"

const Services = () => {
  const subsectionBannerProps = {
    "design": {
      title: "Design",
      description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. ",
      subtitle: "Our design services include:",
    },
    "engineering": {
      title: "Engineering",
      description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      subtitle: "Our engineering services include:",
    },
    "project-management": {
      title: "Project Management",
      description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      subtitle: "Our project management services include:",
    },
  }

  const uxItems = [
    {
      url: "/ux-1.png",
      title: "User Research and Personal Development",
    },
    {
      url: "/ux-2.png",
      title: "Information Architecture and Wireframing",
    },
    {
      url: "/ux-3.png",
      title: "Interactive Prototyping and User Testing",
    },
    {
      url: "/ux-4.png",
      title: "UI Design and Visual Branding",
    },
  ]

  const uiItems = [
    {
      url: "/ui-1.png",
      title: "Intuitive and Visually Appealing Interface Design",
    },
    {
      url: "/ui-2.png",
      title: "Custom Iconography and Illustration",
    },
    {
      url: "/ui-3.png",
      title: "Typography and Color Palette Selection",
    },
    {
      url: "/ui-4.png",
      title: "Responsive Design for Various Devices",
    },
  ]

  const brandingItems = [
    {
      url: "/branding-1.png",
      title: "Logo Design and Visual Identity Development",
    },
    {
      url: "/branding-2.png",
      title: "Brand Strategy and Positioning",
    },
    {
      url: "/branding-3.png",
      title: "Brand Guidelines and Style Guides",
    },
    {
      url: "/branding-4.png",
      title: "Marketing Collateral Design (Brochures, Business Cards, etc.)",
    },
  ]

  const webItems = [
    {
      url: "/web-1.png",
      title: "Front-End Development (HTML, CSS, JavaScript)",
    },
    {
      url: "/web-2.png",
      title: "Back-End Development (PHP, Python, Ruby)",
    },
    {
      url: "/web-3.png",
      title: "Content Management System (CMS) Development (WordPress, Drupal)",
    },
    {
      url: "/web-4.png",
      title: "E-Commerce Platform Development (Magento, Shopify)",
    },
  ]

  const mobileItems = [
    {
      url: "/mobile-1.png",
      title: "Native iOS and Android App Development",
    },
    {
      url: "/mobile-2.png",
      title: "Cross-Platform App Development (React Native, Flutter)",
    },
    {
      url: "/mobile-3.png",
      title: "App Prototyping and UI/UX Design Integration",
    },
    {
      url: "/mobile-4.png",
      title: "App Testing, Deployment, and Maintenance",
    },
  ]

  const customItems = [
    {
      url: "/custom-1.png",
      title: "Enterprise Software Development",
    },
    {
      url: "/custom-2.png",
      title: "Custom Web Application Development",
    },
    {
      url: "/custom-3.png",
      title: "Integration with Third-Party APIs and Systems",
    },
    {
      url: "/custom-4.png",
      title: "Legacy System Modernization and Migration",
    },
  ]

  const projectItems = [
    {
      url: "/project-1.png",
      title: "Requirements Gathering and Analysis",
    },
    {
      url: "/project-2.png",
      title: "Project Roadmap and Timeline Development",
    },
    {
      url: "/project-3.png",
      title: "Resource Allocation and Task Assignment",
    },
    {
      url: "/project-4.png",
      title: "Risk Assessment and Mitigation Strategies",
    },
  ]

  const agileItems = [
    {
      url: "/agile-1.png",
      title: "Iterative Development and Sprints",
    },
    {
      url: "/agile-2.png",
      title: "Scrum or Kanban Methodology Implementation",
    },
    {
      url: "/agile-3.png",
      title: "Regular Progress Updates and Demos",
    },
    {
      url: "/agile-4.png",
      title: "Continuous Improvement and Feedback Incorporation",
    },
  ]

  const qualityItems = [
    {
      url: "/quality-1.png",
      title: "Test Planning and Execution",
    },
    {
      url: "/quality-2.png",
      title: "Functional and Usability Testing",
    },
    {
      url: "/quality-3.png",
      title: "Performance and Security Testing",
    },
    {
      url: "/quality-4.png",
      title: "Bug Tracking and Issue Resolution",
    },
  ]

  return (
    <div>
      <SectionBanner>
          <Heading>Our Services</Heading>
          <Paragraph className="text-center">Transform your brand with our innovative digital solutions that captivate and engage your audience.</Paragraph>
      </SectionBanner>

      <div>
        <SubsectionBanner title={subsectionBannerProps["design"].title} description={subsectionBannerProps["design"].description} subtitle={subsectionBannerProps["design"].subtitle}></SubsectionBanner>

        <Subsection title="User Experience (UX) Design" items={uxItems}></Subsection>
        <Subsection title="User Interface (UI) Design" items={uiItems}></Subsection>
        <Subsection title="Branding and Identity" items={brandingItems}></Subsection>
        {}
      </div>

      <div>
        <SubsectionBanner title={subsectionBannerProps["engineering"].title} description={subsectionBannerProps["engineering"].description} subtitle={subsectionBannerProps["engineering"].subtitle}></SubsectionBanner>
        
        <Subsection title="Web Development" items={webItems}></Subsection>
        <Subsection title="Mobile App Development" items={mobileItems}></Subsection>
        <Subsection title="Custom Software Development" items={customItems}></Subsection>
      </div>

      <div>
        <SubsectionBanner title={subsectionBannerProps["project-management"].title} description={subsectionBannerProps["project-management"].description} subtitle={subsectionBannerProps["project-management"].subtitle}></SubsectionBanner>
        
        <Subsection title="Project Planning and Scoping" items={projectItems}></Subsection>
        <Subsection title="Agile Development" items={agileItems}></Subsection>
        <Subsection title="Quality Assurance and Testing" items={qualityItems}></Subsection>
      </div>

      <FooterBanner></FooterBanner>
    </div>
  )
}

export default Services