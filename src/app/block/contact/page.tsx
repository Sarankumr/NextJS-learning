'use client';   
import { ICONES } from "@/assets";
import { CustomButton } from "@/components/CommonComponent/CustomButton/CustomButton";
import { CustomAnimationText } from "@/components/CommonComponent/CustomText/CustomAnimationText";
import CustomFadedAnimationText from "@/components/CommonComponent/CustomText/CustomFadedAnimationText";
import { useRouter } from "next/navigation";
import React from "react";



export const Contact = () => {

    const router = useRouter();
    const TEXT = [
        "We turn ideas into reality with technology.",
        "Our focus is on innovation, growth, and excellence.",
        "We deliver tailored IT solutions for businesses of all sizes",
        "Passionate about solving challenges and building success.",
        "Together, we create a future powered by technology.",
    ]

    const SERVICE = [
        { id: 1, title: 'Request for services', icone: ICONES.Building },
        { id: 2, title: 'Investor Information', icone: ICONES.Chart },
        { id: 3, title: 'Media Contacts', icone: ICONES.Media },
    ]

    const LOOKING_SOMETHINK = [
        { id: 1, title: 'Analyst relations' },
        { id: 2, title: 'CSR' },
        { id: 3, title: 'Partnerships' },
        { id: 4, title: 'Website feedback' },
    ]
    return (
        <div className={'mt-3 flex-1 bg-white'}>
            <div className={'flex items-center h-96'}>
                <div className={"flex-1 justify-center items-center p-24"}>
                    <CustomAnimationText sequence={TEXT} />
                </div>
                <div className={"flex-1"}>
                    <p className={"text-2xl text-[gray] text-center font-semibold p-5"}>
                        We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
                    </p>
                </div>
            </div>
            <div className="">
                <div className={'flex-1 justify-between items-center mt-5 flex gap-10'}>
                    {SERVICE.map((item) => {
                        const Icone = item.icone;
                        return (
                            <CustomButton
                                btnBagroundColor={'red'}
                                buttonContainerStyle={{
                                    width: '100%',
                                    borderWidth: 1,
                                    borderColor: '#000',
                                    borderRadius: 5,
                                    boxShadow: '0.5' 
                                }}
                                childern={
                                    <div 
                                        onClick={() => { router.push('/requestForService') }}
                                        className={'gap-2 flex-1'}>
                                        <Icone color={'red'} size={30} style={{  }} />
                                        <p className={'font-semibold text-2xl text-left'}>{item.title}</p>
                                    </div>
                                }
                            />
                        )
                    })}
                </div>
                <div className="">
                    <div className={'flex-1 font-medium text-2xl mt-10 text-gray-700'}>Looking for something else?</div>
                    <div className={'mt-10 mb-6 flex gap-10 justify-between'}>
                        {LOOKING_SOMETHINK.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={'flex gap-2'}
                                >
                                    <div className={'text-2xl text-black mb-2 font-semibold'}>{item.title}</div>
                                    <ICONES.RightCircleArrow color={'#000'} size={30} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}  