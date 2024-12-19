'use client';
import { ICONES, IMAGES } from "@/assets";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import { CustomFooterTitle } from "@/components/Footer/component/CustomFooterTitle";
import useWindowDimensions from "@/global/hook/useWindowDimensions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CustomAreaExpertise } from "./component/CustomAreaExpertise";
import { CustomHoverZoomCard } from "./component/CustomHoverZoomCard";
import { CustomClientCard } from "./component/CustomClientCard";
import { CustomModal } from "@/components/CommonComponent/CustomModal/CustomModal";


export const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after the component mounts
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);
    const BANNER =
    //public/Items.json
    {
        "items": {
            "bootstrap": [
                {
                    "id": 1,
                    "title": "Photography",
                    "body": "Bootstrap Carousel Example",
                    "imageUrl": IMAGES.banner1,
                    "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
                },
                {
                    "id": 2,
                    "title": "City Views",
                    "body": "Bootstrap Carousel Example",
                    "imageUrl": IMAGES.banner2,
                    "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
                },
                {
                    "id": 3,
                    "title": "Wild Life",
                    "body": "Bootstrap Carousel Example",
                    "imageUrl": IMAGES.banner3,
                    "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
                },
                {
                    "id": 4,
                    "title": "Foods and Culture",
                    "body": "Bootstrap Carousel Example",
                    "imageUrl": IMAGES.banner4,
                    "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
                }
            ]
        }
    }

    const About_Arr = [
        {
            id: 1,
            title: 'Product Conceptualization',
            icone: <ICONES.Building />,
            descp: 'We love to hear new ideas and get an opportunity to work on the ones we strongly believe in. We leverage our existing experience of working with successful startups & large enterprises to help you validate and define the products and line of business applications.'
        },
        {
            id: 2,
            title: 'Experience Definition',
            icone: '',
            descp: 'Our design team works on bringing your idea to life. Taking a structured approach and emphasizing on creativity you get intuitive, effective and lovable user experience.'
        },
        {
            id: 3,
            title: 'Software Development',
            icone: '',
            descp: 'We take great pride in our engineering excellence, harnessed over the years working with some of the best customers in the world and on some of the very complex problems. Our engineers love working with latest technologies and tools to create high performance & scalable products and applications.'
        },
        {
            id: 4,
            title: 'Software Verification',
            icone: '',
            descp: 'Firm believer in combined engineering we use the best in class tools and processes to ensure that what gets delivered to you is pixel perfect and is exactly what you envisioned'
        },

    ]

    const STRATEGIC_OBJECT = [
        {
            id: 1,
            iconeSize: 50,
            iconeColor: '',
            iconeName: 'Manager',
            title: 'Expand our leadership through differentiated services and products leveraging our engineering pedigree'
        },
        {
            id: 2,
            iconeSize: 35,
            iconeName: 'Globe',
            iconeColor: 'blue',
            title: 'Be an employer of choice for professional services talent across chosen geographies'
        },
        {
            id: 3,
            iconeSize: 40,
            iconeName: 'Chip',
            title: 'Be the preferred digital and AI partner for Global 2000, equivalent and emerging enterprises in chosen markets'
        },
        {
            id: 4,
            iconeSize: 30,
            iconeName: 'Env',
            iconeColor: 'green',
            title: 'Weave ESG (Environmental, Social and Governance) into our business strategy'
        },
        {
            id: 5,
            iconeSize: 30,
            iconeName: 'ChartCandle',
            iconeColor: 'orange',
            title: 'Continue to deliver top quartile TSR (Total Shareholder Return) over the medium term.'
        },
    ]
    return (
        <div style={{ flexDirection: 'row', flex: 1, marginBottom: 20 }}>
            <div style={{ borderRadius: 20, marginTop: 30 }}>
                <CustomCarousel data={BANNER} />
            </div>
            <div className={'flex-1'}>
                <CustomAreaExpertise />
            </div>
            <div className={'bg-black p-5 mb-20 mt-10'}>
                <p className={'text-4xl text-white font-semibold text-center mb-10 border-b-2 border-[red] pb-3'}>About</p>
                <p className={'text-lg text-white font-semibold text-center mt-10 mb-10'}>iNotch Private Limited is IT enabled service company</p>

                <div className={'flex gap-10'}>
                    <div className={'flex-1'}>
                        <h1 className={'text-4xl text-white font-semibold text-center mb-10'}>iNotch Private Limited is IT enabled service company</h1>
                        <p className={'text-lg text-white font-light text-center mt-10 mb-10'}>We, iNotch take pride in delivering true value to enterprises and start-ups alike since 2014. Our driven and dedicated team of engineers ensures that consistently delivers robust, high quality products and solutions to our customers. Our ever improving track record is a testimony to this.</p>
                    </div>
                    <div className={'flex-1'}>
                        <div className={"flex-row flex-wrap gap-4"}>
                            {About_Arr.map((item, index) => {
                                const ICONES = item.icone;
                                return (
                                    <div
                                        key={index}
                                        className={`text-white 
                                            items-center mb-4 justify-center flex-1
                                            transform transition-transform duration-700 ease-in-out
                                            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50%] opacity-0'}
                                        `}
                                        style={{ transitionDelay: `${index * 500}ms` }}
                                    >
                                        <div className="items-center justify-center flex flex-col text-center">
                                            <h2 className="font-semibold text-white">{item.title}</h2>
                                            <div className="h-1 bg-[red] w-[10%] mt-1 rounded-full" />
                                            <p className="text-lg font-light mt-3">{item.descp}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex-1 p-5'}>
                <ICONES.Quote color={'#4E84C4'} size={100} />
                <p
                    style={{ fontFamily: 'math' }}
                    className={"text-[#4E84C4] text-6xl text-center"}
                >
                    Our investment in strategic talent development initiatives and the linking of learning to career development have energized our workforce. Our empowering, performance-driven work culture is helping us attract local talent across all our key markets.
                </p>
                <div className={'bg-slate-600 w-full mt-10 mb-10'} style={{ height: 1 }} />
                <div>
                    <div className={"flex-1 flex gap-5"}>
                        <div className={"flex-1"}>
                            <Image alt={'group'} src={IMAGES.group} />
                        </div>
                        <div className={"flex-1 justify-center items-center"}>
                            <h1 className={'font-semibold text-current text-black mt-20'}>Greater futures through innovation</h1>
                            <p className={'font-light mx-5 text-current text-black text-center text-lg'}>Watching the world of next-tech unfold? It's time to be part of it. Explore challenging and exciting opportunities across the globe.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className={'font-sans text-4xl text-black font-semibold'}>Meet Our Clients</h1>
                    <p className={'font-sans text-2xl text-black font-light mt-2'}>We deliver industry-leading capabilities to clients across all major verticals, including Financial Services, Manufacturing, Technology and Services, Telecom and Media, Retail and CPG, Life Sciences and Healthcare and Public Services.</p>
                </div>
                <div className="flex gap-5 flex-1 flex-wrap mb-10">
                    <div className={'mt-5 flex gap-5 flex-1 flex-wrap '}>
                        <CustomClientCard />
                        <CustomClientCard />
                        <CustomClientCard />
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <h1 className={"text-5xl text-black font-semibold text-center mt-10 "}>
                    Our Purpose
                </h1>
                <p className={"text-2xl text-gray-700 font-normal text-center mb-10 mx-10 mt-3"}>
                    To bring together the best of technology and our people to supercharge progress.
                </p>
                <div className={'flex gap-5'}>
                    <div style={{ flex: 0.5 }}>
                        <Image src={IMAGES.saran} objectFit={'stretch'} className={'h-96 w-full object-stretch'} alt="saran" />
                    </div>
                    <div className={'flex-1'}>
                        <ICONES.Quote color={'#000'} size={70} />
                        <p
                            style={{ fontFamily: 'math' }}
                            className={"text-[#000] text-3xl text-center"}
                        >
                            We look forward to supercharging our growth with optimism and confidence, ready to seize the many opportunities ahead. Our growth strategy for the emerging digital and AI future is built on five strategic objectives.”
                        </p>
                        <CustomModal
                            modalSize={'xl'}
                            btnContent={
                                <div className={'flex gap-2 items-center cursor-pointer'}>
                                    <h4 className={'text-[#5F1EBE] text-lg mt-1'}>Our five strategic object</h4>
                                    <ICONES.RightLongArrow color={'#5F1EBE'} size={20} />
                                </div>
                            }
                            children={
                                <div className="w-full mt-4">
                                    {STRATEGIC_OBJECT.map((item, index) => {
                                        //@ts-ignore
                                        const IconComponent = ICONES[item.iconeName];
                                        return (
                                            <div
                                                key={index}
                                                className="p-3 bg-slate-100 rounded-sm mb-3 items-start flex gap-2"
                                            >
                                                <IconComponent size={item.iconeSize} color={item.iconeColor} />
                                                <p className="text-black" style={{ fontSize: 18, marginTop: 3 }}>{item.title}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        />
                        <div className="mt-3">
                            <h2 className={'font-semibold text-3xl text-black'}>J Saran kumar</h2>
                            <p className={'font-light text-black text-lg'}>Software developer | <b>iNotch</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const styles = {
    imageStyle: {
        height: 90,
        width: 90,
        borderRadious: 100
    }
}