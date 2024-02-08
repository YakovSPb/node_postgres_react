import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ReactComponent as Vk } from './assets/images/vk.svg';
import {ILoginFormField, IPostFormField, IRegisterFormField} from "./types";
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
    },
    {
        img: <img className="w-full h-[500px] object-cover" src={'/images/slide_05.png'} alt={'slide_05'}/>
    }
]

export const PAGES = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/contact',
        label: 'Contact'
    },
];

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
    {
        label: 'hh',
        link: 'https://hh.ru/resume/822d7a0bff05f790b50039ed1f613241424f67',
        icon:  <span className='text-base'>hh.ru</span>
    },
]

export const REGISTER_FORM_FIELDS:IRegisterFormField[] = [
    {
        key: 'name',
        label: 'Name',
        type: '',
    },
    {
        key: 'email',
        label: 'Email Address',
        type: '',
    },
    {
        key: 'password',
        label: 'Password',
        type: 'password',
    },
    {
        key: 'repeatPassword',
        label: 'Repeat password',
        type: 'repeatPassword',
    },
]

export const LOGIN_FORM_FIELDS:ILoginFormField[] = [
    {
        key: 'email',
        label: 'Email Address',
        type: '',
    },
    {
        key: 'password',
        label: 'Password',
        type: 'password',
    },
]

export const POST_FORM_FIELDS:IPostFormField[] = [
    {
        key: 'title',
        label: 'Title',
    },
    {
        key: 'content',
        label: 'Content',
        type: 'multiline'
    },
]

export const SETTINGS = [
    {
        label: 'Profile',
        path: '/'
    },
    {
        label: 'Account',
        path: '/'
    },
    {
        label: 'Dashboard',
        path: '/'
    },
    ]
