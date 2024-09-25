import Image from 'next/image';
import bannerDelevirCar from '/public/bannerDelevirCar.png'
import bunnerCarpet from '/public/bannerCarpet3.png'

export default function Banner({title,text,button,text3,text4,tel1,tel2,address,img,img2,infoTel}){
    return(
        <div className="bg-[url('/bannerBG.png')] bg-no-repeat bg-cover bg-center relative rounded-[32px] px-[64px] pt-[66px] pb-[83px] max-phone-sm:pb-[50px] flex items-center justify-between max-lg:px-[30px] max-table-850:flex-col max-table-850:gap-y-6 max-phone-sm:px-[20px] overflow-x-hidden">
            <div className='w-[60%] max-lg:w-[80%] max-table-850:w-full'>
                <h3 className="text-white text-[42px] font-bold leading-[50px] mb-[14px] tracking-tight-custom max-sm:text-[37px] max-sm:leading-[40px] max-phone:text-[34px] max-phone:leading-[37px]">{title}</h3>
                <p className="text-white text-[20px] font-normal leading-normal tracking-[-0.8px] w-[60%] max-lg:w-full max-sm:text-[18px] max-sm:w-[90%] max-phone:text-[17px]">{text}</p>
                {button && <button className="sendButton text-primaryblue text-lg max-phone:text-sm font-medium mt-[54px] leading-normal px-[24px] py-[16px] bg-white duration-300 ease-in-out hover:bg-raisinBlack  hover:text-white">Связаться с нами</button>}

                {infoTel && <div className='flex items-start gap-[40px] max-lg:flex-col max-lg:gap-[25px] mt-[27px]'>
                    <div className='flex flex-col'>
                        <p className='text-white text-[14px] font-normal leading-normal tracking-[-0.56px] opacity-[0.6] mb-[11px]'>{text3}</p>
                        <a className='text-white text-[20px] font-medium leading-normal tracking-[-0.8px] mb-[11px]' href="tel:+998 (77) 123-34-56">{tel1}</a>
                        <a className='text-white text-[20px] font-medium leading-normal tracking-[-0.8px]' href="tel:+998 (77) 123-34-56">{tel2}</a>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-white text-[14px] font-normal leading-normal tracking-[-0.56px] opacity-[0.6] mb-[11px]'>{text4}</p>
                        <p className='text-white text-[20px] font-medium leading-normal tracking-[-0.8px]'>{address}</p>
                    </div>
                </div> } 
            </div>

            <div className='w-[46%] max-sm:w-full'>
                {img && <div className='w-[431px] h-[323px] max-sm:h-auto'>
                    <Image
                        src={bannerDelevirCar}
                        alt="bannerDelevirCar"
                    />
                </div>}

                {img2 && <div className='w-[650px] max-phone-sm:w-[500px] h-[279px] max-sm:h-auto translate-x-[95px] translate-y-[55px] max-xl:translate-x-[45px] max-md:translate-x-[40px] max-md:translate-y-0'>
                    <Image
                            src={bunnerCarpet}
                            alt="bunnerCarpet"
                        />
                </div>}
            </div>

           
        </div>
    )
}