'use client';
import Image from "next/image";
import React from "react";
import logo from '@/assets/images/logo.jpeg'
import { useRouter } from "next/navigation";



const NavigationTabBar = () => {

    const MENU = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Services", path: "/pages/services" },
        { id: 3, name: "career", path: "/pages/career" },
        { id: 4, name: "About Us", path: "/pages/about" },
        { id: 5, name: "Contact Us", path: "/pages/contact" },
    ]

    const router = useRouter();

    return (
        <div className="flex justify-between flex-1 items-center w-full fixed top-0 left-0 z-50 bg-white">
            <div className="justify-center items-center flex-1">
                <div className="flex items-center gap-4">
                    <Image alt="logo" src={logo} height={50} width={100} />
                    <div
                        className={"font-semibold mt-2"}
                        style={styles.companyTextStye}
                    >
                        iNotch Private Limited
                    </div>
                </div>
            </div>
            <div
                className={"flex flex-1 "}
                style={styles.menuContainer}
            >
                {/* {width > 920 ? (
                    <div className="gap-4" style={styles.innerMenuContainer}>
                        {MENU.map((item) => (
                            <span
                                key={item.id}
                                style={{ fontSize: 17 }}
                                onClick={() => { router.push('/contact') }}
                                className={"font-medium text-2xl p-4"}
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                ) : (
                    <ICONES.Menu size={30} color={'#000'} />
                )} */}
                <div className="gap-4" style={styles.innerMenuContainer}>
                    {MENU.map((item) => (
                        <span
                            key={item.id}
                            style={{ fontSize: 17, }}
                            onClick={() => { router.push(item.path) }}
                            className={`font-medium text-2xl px-4 py-2 rounded-full mx-1
                                    bg-[#ffffff] cursor-pointer
                                    hover:bg-slate-200
                                    `}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}


const styles = {
    menuContainer: {
        justifyContent: 'end',
        alignItems: 'center',
        marginRight: 20
    },
    innerMenuContainer: {
        backgroundColor: '#4c4c4c',
        padding: 10,
        gap: 20,
        borderRadius: 100,
        overflows: 'hidden'
    },
    companyTextStye: {
        letterSpacing: 2,
        fontSize: 30,
        fontFamily: 'unset',
    }
}

export default NavigationTabBar;