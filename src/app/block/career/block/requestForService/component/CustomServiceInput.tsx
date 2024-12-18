'use client';



export const CustomServiceInput = ({
    type = "text",
    placeholder = '',
}) => {
    return (
        <div className={"flex-1 w-full"}>
            <input
                type={type}
                placeholder={placeholder}
                className={"bg-white w-full text-lg font-semibold p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"}
            />
        </div>
    );
};
