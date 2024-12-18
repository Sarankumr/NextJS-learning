'use client';
import { ICONES } from "@/assets";

export const CustomAreaExpertise = () => {
    const CONTENT_ARRY = [
        {
            id: 1,
            title: 'Digital',
            icone: ICONES.Digital,
            desp: 'HCLTech’s end-to-end Digital offerings enable enterprises to increase business resilience, improve operational efficiency and deepen client engagement.'
        },
        {
            id: 2,
            title: 'Engineering',
            icone: ICONES.Engineer,
            desp: 'HCLTech Engineering and R&amp;D services (ERS) empower enterprises to improve time-to-profit, accelerate product development and maximize return on innovation.'
        },
        {
            id: 3,
            title: 'Cloud',
            icone: ICONES.Cloude,
            desp: 'HCLTech’s exclusive CloudSMART offerings and services enable organizations to optimize cloud to accelerate innovation and agility at scale.'
        },
        {
            id: 4,
            title: 'Ai',
            icone: ICONES.AiIcone,
            desp: 'HCLTech empowers organizations across industries to identify and seize opportunities to leverage AI and GenAI to automate and accelerate business processes.'
        },
    ];

    return (
        <div className="flex-1 w-full p-10 bg-gray-50">
            <div className="flex-1">
                <h1 className="text-5xl text-black font-semibold text-center mt-10 mb-5">
                    Our Areas of Expertise
                </h1>
                <p className="text-2xl text-gray-700 font-normal text-center mb-10 mx-10">
                    With expertise in Digital, Engineering, Cloud, and AI, we deliver solutions that fulfill the traditional, transformational, and future needs of clients across the globe.
                </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt">
                {CONTENT_ARRY.map((item) => {
                    const ICONE = item.icone;
                    return (
                        <div
                            key={item.id}
                            className={`
                                relative flex-1 min-w-[250px] max-w-[350px] rounded-xl p-6
                                bg-gradient-to-br from-[#e0e0e0] via-[#e2e2e2] to-[#a0a0a0]
                                transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:from-[#e0e0e0] hover:to-[#a0a0a0]              
                                cursor-pointer
                            `}
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-white rounded-full p-2 shadow-md">
                                    <ICONE size={45} color={'#FF5555'} />
                                </div>
                                <h1 className="text-3xl text-black font-semibold ml-4">
                                    {item.title}
                                </h1>
                            </div>
                            <p className="text-lg text-gray-800 font-light">
                                {item.desp}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
