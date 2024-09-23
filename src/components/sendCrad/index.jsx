"use client"

import { useState } from "react";



export default function SendCard(){
    const [phone, setPhone] = useState("+998");
    const [text, setText] = useState("");
    const [time, setTime] = useState("");
    const handSendForm = (e)=>{
        e.preventDefault();
        setPhone("+998");
        setText("")
        setTime("")
    };
    const handlePhoneChange = (e) => {
        let value = e.target.value;
        value = value.replace(/[^\d]/g, "");
        let formattedValue = "+998";

        if (value.length > 3) {
            formattedValue += ` ${value.slice(3, 5)}`;
        }
        if (value.length > 5) {
            formattedValue += ` ${value.slice(5, 8)}`;
        }
        if (value.length > 8) {
            formattedValue += ` ${value.slice(8, 10)}`;
        }
        if (value.length > 10) {
            formattedValue += ` ${value.slice(10, 12)}`;
        }
        setPhone(formattedValue);
    };
    return(
        <div className="w-[49%]  max-table-850:w-full pt-[53px] px-[101px] pb-[55px] max-xl:px-[30px] max-sm:px-[20px] max-sm:pt-[40px] rounded-[32px] shadow-[0px_14px_50px_0px_rgba(3,55,167,0.08)]">
          <h2 className="text-raisinBlack text-center text-[32px] font-bold leading-[36px] tracking-[-1.28px] mb-[68px]">
            Калькулятор стрирки{" "}
          </h2>
          <form onSubmit={handSendForm}>
            <label className="text-raisinBlack text-[16px] font-normal leading-normal tracking-[-0.64px]">
              Примерная площадь ковров в м²
            </label>
            <input
              className="w-full py-[23px] max-phone-sm:py-[16px] pl-[27px] focus:outline-none rounded-[10px] bg-lightGray text-raisinBlack placeholder:text-raisinBlack text-[16px] mt-[16px]  mb-[46px] font-normal leading-normal"
              type="number"
              required 
              onChange={(e) => setText(e.target.value)}
            value={text}
              placeholder="Введите число"
            />

<label className="text-raisinBlack text-[16px] font-normal leading-normal tracking-[-0.64px]">
               Как вас зовут?
            </label>
            <input
              className="w-full py-[23px] max-phone-sm:py-[16px] pl-[27px] focus:outline-none rounded-[10px] bg-lightGray text-raisinBlack placeholder:text-raisinBlack text-[16px] mt-[16px]  mb-[46px] font-normal leading-normal"
              type="text "
              required 
              onChange={(e) => setTime
                (e.target.value)}
            value={time}
              placeholder="Ваше имя"
            />

            <label className="text-raisinBlack text-[16px] font-normal leading-normal tracking-[-0.64px] ">
              Номер телефона
            </label>
           <input 
                    className="w-full py-[23px] max-phone-sm:py-[16px] pl-[27px] focus:outline-none rounded-[10px] bg-lightGray text-raisinBlack placeholder:text-raisinBlack text-[16px] mt-[16px] mb-[35px]  font-normal leading-normal" 
                    placeholder="+998" 
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={17} 
                    required 
                />

                <button className="text-[18px] text-white font-medium py-[16px] text-center bg-primaryblue w-full rounded-full shadow-[0px_14px_42px_0px_rgba(3,55,167,0.13)]">Отправить заявку</button>
          </form>
        </div>
    )
}