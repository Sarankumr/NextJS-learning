'use client';
import React, { useState } from "react";

export const FooterInput = ({ title = "" }) => {



    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
        console.log("Input value: ", e.target.value);
    };

    const handleSubmit = () => {
        alert(`Submitted value: ${inputValue}`);
    };

    return (
        <div className="flex items-center" style={{ marginTop: 20 }}>
            <input
                placeholder={"Enter your email..."}
                style={styles.inputContStyle}
                value={inputValue}
                onChange={handleChange}
            />
            <button
                onClick={handleSubmit}
                style={styles.buttonContStyle}
            >
                Submit
            </button>
        </div>
    );
};


const styles = {
    buttonContStyle: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        width: "25%",
        height: 44,
        padding: 5,
        backgroundColor: "red",
        color: "white",
        fontWeight: 600,
        cursor: "pointer",
    },
    inputContStyle: {
        padding: 10,
        backgroundColor: "#fff",
        fontSize: 15,
        fontWeight: 600,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flex: 1,
        height: 44,
    }
}