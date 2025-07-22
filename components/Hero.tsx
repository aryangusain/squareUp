import Button from "./Button"

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col gap-[40px] items-center w-full bg-[url('/abstract.png')] bg-no-repeat bg-bottom cursor-pointer bg-contain pt-[112px] pb-[224px]">
          <div className="flex flex-col justify-center items-center font-semibold text-[48px]">
              <div>A Digital Product Studio</div>
              <div>that will Work</div>
          </div>

          <div className="text-gray-200 px-[30px] py-[18px] border-1 border-gray-600 rounded-[8px]">
              For <span className="px-[10px] py-[8px] bg-gray-700 text-gray-100 rounded-[6px]">Startups</span> , <span className="px-[10px] py-[8px] bg-gray-700 text-gray-100 rounded-[6px]">Enterprise leaders</span> , <span className="px-[10px] py-[8px] bg-gray-700 text-gray-100 rounded-[6px]">Media & Publishers</span> and <span className="px-[10px] py-[8px] bg-gray-700 text-gray-100 rounded-[6px]">Social Good</span>
          </div>

          <div className="flex gap-[13px]">
              <Button variant="secondary">Our Works</Button>
              <Button variant="primary">Contact Us</Button>
          </div>
      </div>
      <div className="px-[24px] py-[14px] w-fit rounded-[100px] relative top-6 left-116 bg-gray-800 border-1 border-gray-600 text-xs">Trusted By 250+ Companies</div>
    </div>
  )
}
export default Hero