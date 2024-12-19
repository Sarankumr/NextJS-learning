'use client';

import { ICONES, IMAGES } from "@/assets";
import { Button, Input } from "@chakra-ui/react";
import { CustomServiceInput } from "./component/CustomServiceInput";
import { CustomServiceSelection } from "./component/CustomServiceSelection";
import { CustomServiceDescpInput } from "./component/CustomServiceDescpInput";
import { CustomButton } from "@/components/CommonComponent/CustomButton/CustomButton";
import { CustomCheckBoxWithDesc } from "./component/CustomCheckBoxWithDesc";
import Image from "next/image";


export const RequestForService = () => {
    return (
        <div className={'flex-1'}>
            <div className={'flex-1'}>
                <div className={'flex gap-2 mt-5'}>
                    <ICONES.LeftArrow size={30} />
                    <div className={'font-semibold text-2xl text-black'}>back</div>
                </div>
                <div className={'flex'}>
                    <div className={'mt-10 mx-10'} style={{ width: '50%' }}>
                        <div className={'gap-2 flex'}>
                            <ICONES.Building color={'red'} size={30} style={{}} />
                            <p
                                style={{ fontFamily: 'unset', letterSpacing: 1 }}
                                className={'uppercase font-semibold text-2xl text-left'}
                            >
                                {'Request for services'}
                            </p>
                        </div>
                        <div className={'text-xl text-black font-medium font-sans mt-5 mb-20'}>
                            We’ve driven growth and purposeful transformation across every industry and we’re excited to build on your belief. Tell us a bit more about yourself, so we can get the ball rolling.
                        </div>
                        <div className={'mb-5'}>
                            <div className={'flex gap-10'}>
                                <div className={'flex-1'}>
                                    <CustomServiceInput
                                        placeholder={'Full Name...'}
                                    />
                                </div>
                                <div className={'flex-1'}>
                                    <CustomServiceInput
                                        placeholder={'Last Name...'}
                                    />
                                </div>
                            </div>
                            <div className={'flex gap-10 mt-10'}>
                                <div className={'flex-1'}>
                                    <CustomServiceInput
                                        placeholder={'Email...'}
                                    />
                                </div>
                                <div className={'flex-1'}>
                                    <CustomServiceInput
                                        placeholder={'Organization...'}
                                    />
                                </div>
                            </div>
                            <div className={'flex-1 mt-10'}>

                                <CustomServiceSelection
                                    options={['Web Design', 'Managed Cloud Solutions', 'Devops in AWS', 'App Design', 'Talent Delivery']}
                                />
                            </div>
                            <div className={'flex-1 mt-10'}>
                                <CustomServiceSelection
                                    options={['Web Design', 'Managed Cloud Solutions', 'Devops in AWS', 'App Design', 'Talent Delivery']}
                                />
                            </div>
                            <div className={'flex-1 mt-10'}>
                                <CustomServiceDescpInput
                                    placeholder={'How can we help you?*'}
                                />
                            </div>
                            <div className={'flex-1 mt-10 w-full'}>
                                <CustomCheckBoxWithDesc desc={'I consent to processing of my personal data entered above for TCS to contact me.'} />
                                <CustomCheckBoxWithDesc desc={'I would like to receive details about products, services and events from TCS'} />
                                <div className={'text-xl text-black font-medium font-sans mt-10 mb-20'}>
                                    For further details on how your personal data will be processed and how your consent can be managed, refer to the TCS Privacy Notice.
                                </div>
                                <div className={'flex justify-end'}>
                                    <Button
                                        size="lg"
                                        width={'50%'}
                                        background={'#FF5555'}
                                        className={'text-xl font-semibold text-white'}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'mx-10 h-3/5 w-10 bg-black'} />
                    <div
                        // style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}
                        className={'flex-1 mb-10 '}>
                        <Image
                            src={IMAGES.requestBanner}
                            alt={'RequestForService'}
                            className={'animate-move-up'}
                            style={styles.imageStyle} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


const styles = {
    imageStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
}