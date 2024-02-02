import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ReactComponent as Vk } from './assets/images/vk.svg';
export const CAROUSEL_ITEMS = [
    {
        img: <img className="w-full h-[500px] object-cover" src={'/images/slide_01.jpg'} alt={'slide_01'}/>
    },
    {
        img: <img className="w-full h-[500px] object-cover" src={'/images/slide_02.png'} alt={'slide_02'}/>
    },
    {
        img: <img className="w-full h-[500px] object-cover" src={'/images/slide_03.jpg'} alt={'slide_03'}/>
    },
    {
        img: <img className="w-full h-[500px] object-cover" src={'/images/slide_04.png'} alt={'slide_04'}/>
    }
]

export const SOCIAL_MEDIA_LINKS = [
    {
        label: 'Vk',
        link: 'https://vk.com/yakov_l',
        icon: <Vk/>
    },
    {
        label: 'Telegram',
        link: 'https://t.me/itmeetm',
        icon:  <TelegramIcon />
    },
    {
        label: 'Instagram',
        link: '#',
        icon:  <InstagramIcon />
    },
]
