import React from "react";



export const CustomFooterTitle = ({
    title = ''
}) => {

    return (
        <div className={'flex-1'}>
            <div className={'text-white font-semibold text-2xl'}>
                {title}
            </div>
            <div style={styles.borderStyle} />
        </div>
    )
}


const styles = {
    borderStyle:{
        width: '10%',
        borderRadius: 100,
        marginTop: 5,
        marginBottom: 20,
        borderBottomWidth: 3, 
        borderBottomColor: 'red'
    }
}