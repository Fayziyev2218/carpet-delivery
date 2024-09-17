

export default function Footer(){
    return(
        <div>
            <div className="container">
               <div className=" flex items-center justify-between pb-[27px] max-table-850:flex-wrap max-table-850:gap-[20px]">
                    <ul className="flex items-center gap-x-[30px] max-lg:flex-wrap">
                        <li><a className="text-black text-[16px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="/">Loyiha haqida</a></li>
                        <li><a className="text-black text-[16px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="/">Marshrutlar</a></li>
                        <li><a className="text-black text-[16px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="/">Yashil hudud</a></li>
                        <li><a className="text-black text-[16px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="/">Savol javob</a></li>
                        <li><a className="text-black text-[16px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="/">Aloqa vositalari</a></li>
                    </ul>

                    <a className="text-black text-[16px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="tel:+998 90 000-00-00">+998 90 000-00-00</a>
               </div>
            </div>

            <div className="bg-[#F5F5F5] py-[30px]">
                <div className="container flex items-center justify-between max-md:flex-wrap max-md:gap-[16px] max-sm:items-start">
                    <div className="flex items-center gap-x-[87px] max-sm:flex-col max-sm:items-start">
                        <a className="text-black text-[14px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="/">Copyright 2023</a>
                        <div>
                            <a className="text-black text-[14px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100 mr-[34px]" href="/">Terms of Use</a>
                            <a className="text-black text-[14px] font-medium leading-[30px] opacity-[0.8] hover:opacity-100" href="/">Privacy & Policy</a>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <p className="text-black text-[16px] font-medium leading-[30px] opacity-[0.54]">Designde by:</p>
                        <a className="text-black text-[24px] font-extrabold leading-normal" href="/">Getter</a>
                    </div>

                </div>
            </div>
        </div>
    )
}