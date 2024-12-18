'use client';
import { Button } from "@/components/ui/button";
import React from "react";


export const CustomButton = ({
    title = 'button',
    btnBagroundColor = '#fff',
    buttonContainerStyle = {},
    childern = <></>
}) => {

    const btnBgColor = `bg-${btnBagroundColor}`
    const btnHover = `hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300`;
    return (
        <div className={'flex-1'}>
            <button
                style={buttonContainerStyle ?? styles.buttonStyle}
                className={`flex-1 p-8 px-16 text-black ${btnHover} ${btnBgColor}`}
            >
                {childern}
            </button>
            {/* <Button colorPalette="teal" variant="outline">
                {childern}
            </Button> */}
        </div>
    )
}


const styles = {
    buttonStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        boxShadow: '0.5'
    }
}