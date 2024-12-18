'use client';
import { ICONES } from "@/assets";
import React from "react";
import { CustomFooterTitle } from "./component/CustomFooterTitle";
import { CustomArrowButton } from "./component/CustomArrowButton";
import { Input } from "@chakra-ui/react";
import { FooterInput } from "./component/FooterInput";
import { useRouter } from "next/navigation";



export const CustomAppFooterContect = () => {

    const SOCIAL_ARR = [
        { id: 1, title: 'facebook', icone: ICONES.facebook, hoverBg: '#0077FB', hoverIconeColor: '#fff' },
        { id: 2, title: 'instagrm', icone: ICONES.instagram, hoverBg: '#E1306C', hoverIconeColor: '#fff' },
        { id: 3, title: 'x', icone: ICONES.twitterX, hoverBg: '#1E90FF', hoverIconeColor: '#fff' },
        { id: 4, title: 'linkedIn', icone: ICONES.linkedIn, hoverBg: 'blue', hoverIconeColor: '#fff' },
        { id: 5, title: 'glassDoor', icone: ICONES.glassDoor, hoverBg: '#00A264', hoverIconeColor: '#f' },
    ]


    const CONTACT = [
        { id: 1, title: 'Phone : - ', desc: '+91-996-274-74-62', link: '+919962747462' },
        { id: 2, title: 'Email : - ', desc: 'info@iNotchglobal.com', link: 'info@iNotchglobal.com' }
    ]

    const USER_LINK = [
        { id: 1, title: "Home" },
        { id: 2, title: 'About Us' },
        { id: 3, title: 'Service' },
        { id: 4, title: 'Terms of service' },
        { id: 5, title: 'Privacy and policy' }
    ]

    const SERVICE = [
        {id: 1, title: 'Web Design' },
        {id: 2, title: 'Managed Cloud Solutions' },
        {id: 3, title: 'Devops in AWS' },
        {id: 4, title: 'App Design' },
        {id: 5, title: 'Talent Delivery' }
    ]

    const router = useRouter()

    return (
        <div className={'flex-1 p-5 flex-wrap'}>
            <div className="flex flex-1 justify-between gap-5">
                <div className="flex-1">
                    <CustomFooterTitle title={'Address'} />
                    <b className="text-white">iNotch Private Limited</b>
                    <p className="text-white font-light">
                        Olympia Tech Park,{'\n'}
                        Level 5, Fortius Block, Plot No.1,{'\n'}
                        SIDCO Industrial Estate,{'\n'}
                        Guindy, Chennai,{'\n'}
                        Tamil Nadu 600032,{'\n'}
                        India.
                    </p>

                    <CustomFooterTitle title={'Contact'} />

                    <div className="mt-3">
                        {CONTACT.map((item, index) => {
                            return (
                                <div className="flex mt-1">
                                    <b className="text-white">{item.title}</b>
                                    <a href={`tel:${item.link}`} className="text-[blue] italic mx-2">{item.desc}</a>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className="flex-1">
                    <div>
                        <div className="">
                            <CustomFooterTitle title={'Useful Links'} />
                            <div>
                                {USER_LINK.map((item) => {
                                    return(
                                        <CustomArrowButton title={item.title} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <div className="">
                            <CustomFooterTitle title={'Our Services'} />
                            <div>
                                {SERVICE.map((item) => {
                                    return(
                                        <CustomArrowButton title={item.title} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <div className="">
                            <CustomFooterTitle title={'Join Our Newsletter'} />
                            <div>
                                <div className={'font-normal text-lg text-white'}>
                                    Get to know more information about iNotch.
                                </div>
                                <div>
                                    <FooterInput />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center">
                {SOCIAL_ARR.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() =>  router.push('/dashboard')}
                            className={`p-2 rounded-full bg-white hover:bg-[${item.hoverBg}] transition-colors duration-200`}
                        >
                            <item.icone size={20} color={'#000'} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}