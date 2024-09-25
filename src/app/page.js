import Banner from "@/components/banner";
import Image from "next/image";
import Title from "@/components/title";
import showCarpet from "/public/showCarpet.png";
import illipss from "/public/illipss.png";
import carpetOnly from "/public/carpetOnly.png";
import { askedAbout, cleanCards, HowWork, serviss, showcases } from "@/constants/cards";
import SendCard from "@/components/sendCrad";

export default function Home() {
  const clean = cleanCards;
  const showc = showcases;
  const servCard = serviss;
  const HowWorkCard = HowWork;
  const askedAboutCard = askedAbout;

  return (
    <div className="container">
      <section className="relative pt-[116px] pb-[58px] max-lg:pt-[50px] flex items-center  bg-no-repeat bg-cover bg-center">
        <div>
          <h1 className="w-[592px] max-sm:w-full text-black text-[56px] font-medium leading-[60px] tracking-[-2.24px] max-md:text-[45px] max-md:leading-[52px] max-sm:text-[40px] max-sm:leading-[48px] max-phone-sm:text-[35px] max-phone-sm:leading-[42px] mb-[36px]">
            Чистка ковров любых загрязнении
          </h1>
          <button className="bg-primaryblue rounded-[100px] text-white text-lg max-phone:text-sm font-medium leading-normal px-[24px] py-[16px]  duration-300 ease-in-out hover:bg-raisinBlack  hover:text-white mb-[42px]">
            Связаться с нами
          </button>
          {showc.map((e) => {
            return (
              <div
                key={e.id}
                className="flex items-center gap-x-3 mb-[45px] max-sm:mb-[25px] max-phone-sm:mb-[21px]"
              >
                <div className="w-[42px] h-[42px] bg-white flex items-center justify-center rounded-full shadow-[0px_10px_20px_rgba(0,0,0,0.25)]">
                  <Image className="w-[22px] h-[22px]" src={e.img} />
                </div>

                <p className="text-black text-[34px] font-medium tracking-[-0.96px] max-sm:text-[22px] max-phone-sm:text-[18px]">
                  {e.text}
                </p>
              </div>
            );
          })}
        </div>
        {/* <div className="w-[1000px] h-[1000px] max-laptop:w-[800px] max-laptop:h-[800px] -z-10 absolute top-[-146px] right-[-266px] max-laptop:top-0 max-laptop:right-0 max-lg:hidden">
          <Image src={illipss}/>
        </div> */}
        {/* <div className="absolute w-[1000px] h-[1000px] right-0 top-[-10px]">
          <Image  src={illipss}/>
        </div> */}
        {/* <div className="absolute right-[-200px] top-[-160px] w-[1000px] h-[1000px]">
          <Image src={showCarpet}/>
        </div> */}
        {/* <div className="w-[742px] h-[361px]">
          <Image src={carpetOnly}/>
        </div> */}
      </section>

      <section>
        <Banner 
        title={"Бесплатный вызов и доставка ковров"}
        text={"Мы бесплатно приедем за вашим ковром и привезем его обратно"}
        button={true}
        img={true}
        infoTel={false}


        />
      </section>

      <section className="pt-[111px] pb-[58px]">
        <Title title={"Очищаем ковры покрытия из любых материалов"} />
        <div className="flex items-center gap-x-6 mt-[54px] overflow-x-auto max-xl:overflow-x-scroll">
          <div className="flex gap-x-6">
            {clean.map((e) => {
              return (
                <div
                  key={e.id}
                  className="flex flex-col items-center w-[270px] shrink-0  duration-500 ease-in-out hover:w-[350px]"
                >
                  <Image
                    src={e.img}
                    alt={e.img}
                    className="w-full h-[205px] object-cover rounded-3xl"
                  />
                  <p className="text-black text-center text-[24px] font-medium leading-normal tracking-[-0.96px] mt-[8px]">
                    {e.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex gap-[24px] items-stretch max-table-850:flex-col">
        <div className="w-[49%] max-table-850:w-full pt-[64px] pb-[55px] pl-[48px] pr-[138px] max-xl:pl-[30px] max-xl:pr-[60px] max-lg:pr-[30px] max-sm:px-[20px] max-sm:pt-[40px] flex-shrink-0 rounded-[32px] border border-[#E1E1E1]">
          <h3 className="text-black text-[42px] font-bold leading-[50px] tracking-[-1.68px] mb-[16px]">
            Немного о нас
          </h3>
          <p className="text-raisinBlack opacity-[0.6] text-[20px] max-phone-sm:text-[18px] font-normal leading-normal tracking-[-0.8px] mb-[24px]">
            «Коврочист» предлагает Вам услуги по чистке (стирке, химчистке)
            ковров, ковровых изделий, мягкой мебели и салона автомобиля в городе
            Ташкенте по низким ценам с бесплатным вывозом и доставкой.
          </p>
          <div className="flex gap-[41px] items-center max-lg:flex-wrap">
            <div>
              <p className="text-raisinBlack text-[42px] font-bold leading-[50px] tracking-[-1.68px] mb-[6px]">
                20
              </p>
              <p className="text-raisinBlack text-[20px] font-normal leading-normal tracking-[-0.8px] opacity-[0.6]">
                Сотрудников
              </p>
            </div>
            <div>
              <p className="text-raisinBlack text-[42px] font-bold leading-[50px] tracking-[-1.68px] mb-[6px]">
                24
              </p>
              <p className="text-raisinBlack text-[20px] font-normal leading-normal tracking-[-0.8px] opacity-[0.6]">
                Сотрудников
              </p>
            </div>
            <div>
              <p className="text-raisinBlack text-[42px] font-bold leading-[50px] tracking-[-1.68px] mb-[6px]">
                21
              </p>
              <p className="text-raisinBlack text-[20px] font-normal leading-normal tracking-[-0.8px] opacity-[0.6]">
                Сотрудников
              </p>
            </div>
          </div>
        </div>

        {/* <div className="pt-[53px] px-[101px] pb-[55px] rounded-[32px] shadow-[0px_14px_50px_0px_rgba(3,55,167,0.08)]">
          <h2 className="text-raisinBlack text-center text-[32px] font-bold leading-[36px] tracking-[-1.28px] mb-[68px]">
            Калькулятор стрирки{" "}
          </h2>
          <form>
            <label className="text-raisinBlack text-[16px] font-normal leading-normal tracking-[-0.64px]">
              Примерная площадь ковров в м²
            </label>
            <input
              className="w-full py-[23px] pl-[27px] focus:outline-none rounded-[10px] bg-lightGray text-raisinBlack placeholder:text-raisinBlack text-[16px] mt-[16px] font-normal leading-normal"
              type="text "
              required 
              placeholder="Введите число"
            />
          </form>
        </div> */}
          <SendCard/>
      </section>

      <section className="OurServices pb-[58px] pt-[48px]">
        <Title title={"Наши услуги"} />
        <div className="mt-[24px] flex items-stretch gap-6 max-xl: max-xl:flex-wrap">
          {servCard.map((e) => {
            return (
              <div
                key={e.id}
                className="flex-shrink-0 flex-grow-1 relative flex items-center flex-col bg-late-400 w-[24%] h-auto max-xl:w-[48%] max-sm:w-full  rounded-2xl pt-[35px] pb-[75px] px-[35px] shadow-[0px_14px_50px_0px_rgba(3,55,167,0.08)]"
              >
                <p className="text-black text-center text-[24px] font-medium tracking-[-0.96px] mb-[10px]">
                  {e.text}
                </p>
                <Image
                  className="w-[169px] h-[143px]"
                  src={e.img}
                  alt={e.text}
                />
                <Image
                  className="absolute w-[92px] h-[92px] bottom-[35px] transition duration-300 ease-in-out hover:scale-90"
                  src={e.img2}
                  alt={`${e.text} icon`}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-[169px] mb-[120px]">
        <Title title={"Как мы работаем"}/>
        <div className="mt-[39px] items-stretch flex justify-between gap-y-[24px] gap-x-[24px] flex-wrap">
          {HowWorkCard.map((e)=>{
            return(
              <div key={e.id} className="w-[32%] max-xl:w-[31%] max-lg:w-[48%] max-sm:w-full flex flex-col items-center">
                  <div className="w-full h-auto py-[25px] border rounded-[32px] flex items-center justify-center mb-[16px]">
                    <Image src={e.img}/>
                  </div>
                  <p className="text-black text-center text-[32px] font-medium tracking-[-1.28px] mb-[12px]">{e.text}</p>
                  <p className="text-black w-[80%] opacity-[0.6] text-center text-[16px] font-normal leading-[21px] tracking-[-0.64px]">{e.text2}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mb-[81px]">
        <Title title={"О чем нас часто спрашивают"}/>
        <div className="mt-[53px] flex items-stretch gap-[24px] flex-wrap">
          {askedAboutCard.map((e)=>{
            return(
              <div key={e.id} className="w-[32%] max-xl:w-[31%] bg-white border border-[#A6C5CE] about-card rounded-[40px] pt-[24px] pl-[24px] pr-[24px] pb-[51px] max-xl:pb-[20px] max-lg:w-[48%] max-sm:w-full max-md:px-[20px]">
                <div className="flex items-center justify-center w-[72px] h-[72px] bg-white border border-lightBlue rounded-full mb-[24px] max-xl:mb-[20px]">
                  <Image src={e.img}/>
                </div>
                <h3 className="text-raisinBlack text-[20px] font-bold leading-[24px] mb-[16px]">{e.text}</h3>
                <p className="text-[#7F9B99] text-[18px] font-normal leading-[27px]">{e.text2}</p>
              </div>
            )
          })}
          
        </div>
      </section>

      <section>
        <Banner 
        title={"Свяжитесь с нами"} 
        text={"Мы бесплатно приедем за вашим ковром и привезем его обратно"}
        text3={"Заказы доставляются ежедневноПн – Сб:  900 до 21.00"}
        text4={"Привезти ковёр самостоятельно можно по адресу:"}
        tel1={"+998 (77) 123-34-56"}
        tel2={"+998 (77) 123-34-56"}
        address={"г. Ташкент, Яккасарайский район, ул. Бабура, 3"}
        img2={true}
        infoTel={true}
        />
      </section>

    </div>
  );
}
