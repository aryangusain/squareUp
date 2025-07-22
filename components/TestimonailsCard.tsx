import { TestimonialsCardPropsI } from "@/types/types"
import MinorHeading from "./MinorHeading"
import Paragraph from "./Paragraph"
import Button from "./Button"

const TestimonailsCard: React.FC<TestimonialsCardPropsI> = ({title, description, url, name, job_title}) => {
  return (
    <div className="row-span-1 col-span-1 flex flex-col justify-between gap-[20px] px-[60px] py-[80px] border-1 border-gray-600">
        <MinorHeading className=" text-green-500 ">{title}</MinorHeading>
        <Paragraph>{description}</Paragraph>
        <div className="flex justify-between items-center border-1 border-gray-600 p-[14px] rounded-[6px]">
            <div className="flex gap-[12px] items-center">
                <img src={url} className="h-10"/>
                <div className="flex flex-col">
                    <div className="text-[16px] text-white">{name}</div>
                    <div className="text-[14px] text-gray-100">{job_title}</div>
                </div>
            </div>
            <Button className="hover:bg-gray-600 bg-gray-700">Open Website</Button>
        </div>
    </div>
  )
}
export default TestimonailsCard