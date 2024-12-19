'use client';

import { useState } from "react";

export const CustomServiceSelection = ({
    options = [],
    placeholder = "Select an option",
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="relative w-full">
            <select
                className={`w-full p-3 rounded-md border border-gray-300 text-lg font-semibold bg-white
                    ${selectedOption ? 'text-black' : 'text-[#9CA3AF]' } 
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500`}
                value={selectedOption || ""}
                onChange={handleSelectChange}
            >
                <option disabled selected={!selectedOption}>
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
