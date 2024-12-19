'use client';

export const CustomHoverZoomCard = ({
    key = 0,
    style = {},
    className = '',
    Children = <></>,
}) => {
    return (
        <div key={key} className={"flex-1 w-full mt-10"}>
            <div
                className={`
                        relative flex-1 
                        transform transition-all duration-500 hover:scale-110              
                        cursor-pointer
                    ${className}`}
                style={style}
            >
                {Children}
            </div>
        </div>
    );
};
