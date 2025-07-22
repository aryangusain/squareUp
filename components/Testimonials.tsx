import Heading from "./Heading"
import Paragraph from "./Paragraph"
import SectionBanner from "./SectionBanner"
import TestimonailsCard from "./TestimonailsCard"

const Testimonials = () => {
    const items = [
      {
        title: "SquareUp has been Instrumental in Transforming our Online Presence. ",
        description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        url: "/profile-1.png",
        name: "John Smith",
        job_title: "CEO of Chic Boutique"
      },
      {
        title: "Working with SquareUp was a breeze.",
        description: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        url: "/profile-2.png",
        name: "Sarah Johnson",
        job_title: "Founder of HungryBites."
      },
      {
        title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
        description: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        url: "/profile-3.png",
        name: "Mark Thompson",
        job_title: "CEO of EventMasters"
      },
      {
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        description: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        url: "/profile-4.png",
        name: "Laura Adams",
        job_title: "COO of ProTech Solutions."
      },
      {
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        description: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        url: "/profile-5.png",
        name: "Michael Anderson",
        job_title: "Founder of Dream Homes Realty."
      },
      {
        title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        description: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        url: "/profile-6.png",
        name: "Emily Turner",
        job_title: "CEO of FitLife Tracker"
      },
    ]

    return (
      <div className="border-b-1 border-b-gray-600">
        <SectionBanner>
            <Heading>What our Clients say About us</Heading>
            <Paragraph className="text-center">At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</Paragraph>
        </SectionBanner>
        <div className="grid grid-cols-2 grid-rows-3">
            {
              items.map((item, index) => {
                  return <TestimonailsCard key={index} title={item.title} description={item.description} url={item.url} name={item.name} job_title={item.job_title}></TestimonailsCard>
              })
            }
        </div>
      </div>
    )
}

export default Testimonials