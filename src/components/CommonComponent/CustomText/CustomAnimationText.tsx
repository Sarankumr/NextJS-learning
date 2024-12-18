'use client'
import { TypeAnimation } from 'react-type-animation';


interface textProps {
    sequence: any;
    style?: object;
    className?: string;
    repeat?: "Infinity" | number;
    deletionSpeed?: number | undefined;
    omitDeletionAnimation?: boolean;
    preRenderFirstString?: boolean;
}

export const CustomAnimationText = ({
    sequence = [],
    style = {},
    className = "font-serif text-4xl text-[#000] font-semibold",
    repeat = "Infinity",
    deletionSpeed = undefined,
    omitDeletionAnimation = false,
    preRenderFirstString = false,
}) => {
    return (
        <div className='flex-1 justify-center items-center'>
            <TypeAnimation
                sequence={sequence}
                deletionSpeed={deletionSpeed}
                wrapper={"span"}
                cursor={true}
                repeat={Infinity}
                style={style}
                className={className}
            />
        </div>
    );
};