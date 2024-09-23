import Image from 'next/image';
import cleancard from '/public/cleancard.png'
import cleancard2 from '/public/cleancard2.png'
import cleancard3 from '/public/cleancard3.png'
import cleancard4 from '/public/cleancard4.png'
import star from "/public/star.svg";
import servise from '/public/servise.png'
import serviseButton from '/public/serviseButton.png'


export const cleanCards = [
    {   
        id:"1",
        img:cleancard,
        text:"Сентетика"
    },
    {   
        id:"2",
        img:cleancard2,
        text:"Шерсть"
    },
    {   
        id:"3",
        img:cleancard3,
        text:"Вискоза"
    },
    {   
        id:"4",
        img:cleancard4,
        text:"Шелк"
    },
]

export const showcases = [
    {   
        id:"1",
        img:star,
        text:"Полное удаление пятен"
    },
    {   
        id:"2",
        img:star,
        text:"99% удаление пылевых клещей"
    },
    {   
        id:"3",
        img:star,
        text:"Аккуратность в работе"
    },
    {   
        id:"4",
        img:star,
        text:"Бесплатный вызов и доставка ковров"
    },
]

export const serviss = [
    {   
        id:"1",
        img:servise,
        img2:serviseButton,
        text:"Cтирка ковров на фабрике"
    },
    {   
        id:"2",
        img:servise,
        img2:serviseButton,
        text:"Химчистка мебели на фабрике"
    },
    {   
        id:"3",
        img:servise,
        img2:serviseButton,
        text:"Химчистка ковров у клиента"
    },
    {   
        id:"4",
        img:servise,
        img2:serviseButton,
        text:"Cтирка ковров на фабрике"
    },
]