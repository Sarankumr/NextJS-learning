import { ICONES } from "@/assets";
import { CustomButton } from "@/components/CommonComponent/CustomButton/CustomButton";
import { CustomAnimationText } from "@/components/CommonComponent/CustomText/CustomAnimationText";
import CustomFadedAnimationText from "@/components/CommonComponent/CustomText/CustomFadedAnimationText";
import React from "react";



export const Career = () => {
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
          
        </div>
    )
}  