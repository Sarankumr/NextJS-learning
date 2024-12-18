'use client';

import { useState } from "react";



export const CustomServiceDescpInput = ({
    type = "text",
    placeholder = '',
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    return (
        <div 
            style={{
                borderWidth: isFocused ? 4 :1 ,
                borderColor: isFocused ? '#ef4444' : '#d1d5db',
            }}
            className={"flex-1 w-full h-40 overflow-hidden border-gray-300 rounded-md border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"}>
            <textarea 
                // type={type}
                placeholder={placeholder}
                style={{
                    // textAlign:'justify'
                    textAlign: 'start',
                    borderWidth: 0
                }}
                maxLength={1000}                
                onFocus={(e) => setIsFocused(true)}
                onBlur={(e) => setIsFocused(false)}
                onChange={(e) => setValue(e.target.value)}
                className={"bg-white text-black text-lg overflow-hidden h-full w-full font-semibold p-3 "}
            />
        </div>
    );
};
