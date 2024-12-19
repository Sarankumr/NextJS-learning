'use client';

import { ICONES, IMAGES } from "@/assets";
import { Badge, Box, Button, Card, HStack } from "@chakra-ui/react";
import Image from "next/image";

export const CustomClientCard = ({
    key = 0,
    style = {},
    className = '',
    Children = <></>,
}) => {
    return (
        <div key={key} className={"flex-1 w-full"}>
            <div>
                <Card.Root
                    flexDirection={"row"}
                    overflow={"hidden"}
                    w={"2xl"}
                    height={200}
                    bg={'#fff'}
                    shadow={'sm'}
                    borderWidth={1}
                >
                    <Image
                        objectFit={'strach'}
                        src={IMAGES.group}
                        alt={"Caffe-Latte"}
                        style={{ height: '100%', width: 300 }}
                    />
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2" color={'#000'}>The perfect latte</Card.Title>
                            <Card.Description color={'#000'}>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Card.Description>
                        </Card.Body>
                        <Card.Footer>
                            <HStack className={'mb-1 items-center'}>
                                <p className={'text-[#4e84c4] text-lg mt-2'}>Ream me</p>
                                <ICONES.RightLongArrow size={30} color={'#4e84c4'} style={{ bottom: 2 }}/>
                            </HStack>
                        </Card.Footer>
                    </Box>
                </Card.Root>
            </div>
        </div>
    );
};
