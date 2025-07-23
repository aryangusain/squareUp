import FooterBanner from "@/components/FooterBanner"
import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import SectionBanner from "@/components/SectionBanner"
import SubsectionBanner from "@/components/SubsectionBanner"
import WorkCard from "@/components/WorkCard"

const Work = () => {
  const items = [
    {
      title: "E-Commerce Platform for Fashion Hub",
      img: "/work-1.png",
      name: "Chic Boutique",
      url: "htttps:/www.chicboutique.com",
      description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
    },
    {
      title: "Mobile App for Food Delivery Service",
      img: "/work-2.png",
      name: "HungryBites",
      url: "htttps:/www.hungrybites.com",
      description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
      title: "Booking and Reservation System for Event Management",
      img: "/work-3.png",
      name: "EventMasters",
      url: "htttps:/www.eventmasters.com",
      description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
    },
    {
      title: "Custom Software for Workflow Automation",
      img: "/work-4.png",
      name: "ProTech Solutions",
      url: "https://www.protechsolutions.com",
      description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
      title: "Web Portal for Real Estate Listings",
      img: "/work-5.png",
      name: "Dream Homes Reality",
      url: "https://www.dreamhomesreality.com",
      description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
    },
    {
      title: "Mobile App for Fitness Tracking",
      img: "/work-6.png",
      name: "FitLife Tracker",
      url: "htttps:/www.fitlifetracker.com",
      description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
    },
    {
      title: "Custom Software for Supply Chain Management",
      img: "/work-7.png",
      name: "Global Logistics Solutions",
      url: "htttps:/www.globallogisticssolutions.com",
      description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs."
    },
    {
      title: "Educational Platform for Online Learning",
      img: "/work-8.png",
      name: "EduConnect",
      url: "htttps:/www.educonnect.com",
      description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."
    },
    {
      title: "Mobile App for Travel Planning",
      img: "/work-9.png",
      name: "WanderWise",
      url: "htttps:/www.wanderwise.com",
      description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."
    },
    {
      title: "Web Application for Customer Relationship Management",
      img: "/work-10.png",
      name: "ConnectCRM",
      url: "htttps:/www.connectcrm.com",
      description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."
    },
  ]

  return (
    <div>
      <SectionBanner>
          <Heading>Our Works</Heading>
          <Paragraph className="text-center">Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</Paragraph>
      </SectionBanner>

      <SubsectionBanner title="At SquareUp" subtitle="Here are ten examples of our notable works:" description="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."></SubsectionBanner>

      <div className="grid grid-cols-2">
        {
          items.map((item, index) => {
            return <WorkCard key={index} title={item.title} img={item.img} name={item.name} description={item.description} url={item.url}/>
          })
        }
      </div>
      <FooterBanner />
    </div>
  )
}
export default Work