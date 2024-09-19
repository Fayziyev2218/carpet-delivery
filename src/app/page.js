import Banner from "@/components/banner";
import Image from "next/image";
import Title from "@/components/title";
import { cleanCards } from "@/constants/cards";

export default function Home() {
  const clean = cleanCards;
  return (
    <div className="container">
      <Banner />
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
    </div>
  );
}
