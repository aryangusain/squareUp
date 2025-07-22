const Footer = () => {

    return (
        <div className="px-[80px] py-[40px] w-full text-gray-100 border-t-1 border-t-gray-600 flex flex-col gap-[40px]">
            <div className="flex">
                <div className="flex flex-1 pr-[80px] justify-between items-center">
                    <img src={'/logo-desktop.png'} className="h-10" alt="logo" />
                </div>

                <div className="border-1 rounded-[8px] border-gray-600 flex gap-[20px] items-center py-[10px] pl-[20px] pr-[10px]">
                    <div className="text-gray-100 text-sm">Stay Connected</div>
                    <div className="flex gap-[10px]">
                        <img src={'/facebook.png'} className="h-16"/>
                        <img src={'/twitter.png'} className="h-16"/>
                        <img src={'/linkedin.png'} className="h-16"/>
                    </div>
                </div>
            </div>
            
            <div className="border-t-1 border-t-gray-600 w-full"></div>
            
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[22px] text-sm">
                    <div className="flex gap-[6px] items-center border-b-1 border-b-gray-600 pb-[12px]">
                        <img src={'/mail.png'} className="h-3" />
                        <div className="text-gray-100">squareup@gmail.com</div>
                    </div>
                    <div className="flex gap-[6px] items-center border-b-1 border-b-gray-600 pb-[12px]">
                        <img src={'/phone.png'} className="h-3" />
                        <div className="text-gray-100">+91 9887655632</div> 
                    </div>
                    <div className="flex gap-[6px] items-center border-b-1 border-b-gray-600 pb-[12px]">
                        <img src={'/location.png'} className="h-4" />
                        <div className="text-gray-100">Somewhere in the World</div>
                    </div>
                </div>
                <div className="text-xs text-gray-200">&copy; {new Date().getFullYear()} SquareUp. All rights reserved.</div>
            </div>
        </div>
  )
}

export default Footer