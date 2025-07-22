const Companies = () => {
  return (
    <div className="flex gap-[30px] border-y-1 border-y-gray-600 py-[30px]">
        <div className="px-[30px] py-[16px]">
            <img src={"/zapier.png"} className="h-[40px]"/>
        </div>

        <div className="px-[30px] py-[16px]">
            <img src={"/spotify.png"} className="h-[40px]"/>
        </div>

        <div className="px-[30px] py-[16px]">
            <img src={"/zoom.png"} className="h-[40px]"/>
        </div>

        <div className="px-[30px] py-[16px]">
            <img src={"./slack.png"} className="h-[40px]"/>
        </div>

        <div className="px-[30px] py-[16px]">
            <img src={"./amazon.png"} className="h-[40px]"/>
        </div>

        <div className="px-[30px] py-[16px]">
            <img src={"./adobe.png"} className="h-[40px]"/>
        </div>
    </div>  
  )
}
export default Companies