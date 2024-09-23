import Image from 'next/image';
import bannerDelevirCar from '/public/bannerDelevirCar.png'

export default function Banner(){
    return(
        <div className="bg-[url('/bannerBG.png')] bg-no-repeat bg-cover bg-center relative rounded-[32px] px-[64px] pt-[66px] pb-[83px] max-phone-sm:pb-[50px] flex items-center justify-between max-lg:px-[30px] max-table-850:flex-col max-table-850:gap-y-6 max-phone-sm:px-[20px]">
            <div className='w-[60%] max-table-850:w-full'>
                <h3 className="text-white text-[42px] font-bold leading-[50px] mb-[14px] tracking-tight-custom max-sm:text-[37px] max-sm:leading-[40px] max-phone:text-[34px] max-phone:leading-[37px]">Бесплатный вызов и доставка ковров</h3>
                <p className="text-white text-[20px] font-normal leading-normal mb-[54px] tracking-[-0.8px] w-[60%] max-sm:text-[18px] max-sm:w-[90%] max-phone:text-[17px]">Мы бесплатно приедем за вашим ковром и привезем его обратно</p>
                <button className="sendButton text-primaryblue text-lg max-phone:text-sm font-medium leading-normal px-[24px] py-[16px] bg-white duration-300 ease-in-out hover:bg-raisinBlack  hover:text-white">Связаться с нами</button>
            </div>

            <div className='w-[431px] h-[323px] max-sm:w-full max-sm:h-auto'>
                <Image
                    src={bannerDelevirCar}
                    alt="logo"
                />
            </div>
        </div>
    )
}