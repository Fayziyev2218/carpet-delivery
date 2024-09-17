import Image from 'next/image';
import logo from '/public/logo.png'

export default function Navbar(){
    return(
        <div className='py-[34px]'>
            <div className='container flex items-center justify-between'>
                <Image
                    src={logo}
                    alt="logo"
                    width={100}
                    height={41}
                />
                <button className='bg-black px-[16px] py-[6px] rounded-lg text-white text-[18px] font-medium leading-normal hover:bg-raisinBlack'>Записаться на курс</button>
            </div>
        </div>
    )
}