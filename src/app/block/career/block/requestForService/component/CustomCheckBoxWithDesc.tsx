'use client';

import { ICONES } from "@/assets";
import { useState } from "react";



export const CustomCheckBoxWithDesc = ({
    desc = "text",
    placeholder = '',
}) => {

    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className={"flex-1 w-full mt-10"}>
            <div 
                onClick={() => { setIsChecked(!isChecked) }}
                className={"flex-1 w-full flex items-start"}
            >
                {!isChecked ? 
                    <ICONES.UnChecked size={20} color="#000" style={{marginTop: 5}} /> :
                    <ICONES.Checked size={20} color="#ef4444" style={{marginTop: 5}}/>
                }
                <div className={"font-medium mx-2 text-xl text-black"}>{desc}</div>
            </div>
        </div>
    );
};
