'use client';
import { ICONES } from "@/assets";
import React from "react";

export const CustomArrowButton = ({ title = "" }) => {

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}
        onMouseEnter={(e: any) => {
          e.currentTarget.querySelector(".title-text").style.color =
            styles.hoverText.color;
          e.currentTarget.querySelector(".title-text").style.fontSize =
            styles.hoverText.fontSize;
        }}
        onMouseLeave={(e: any) => {
          e.currentTarget.querySelector(".title-text").style.color =
            styles.text.color;
          e.currentTarget.querySelector(".title-text").style.fontSize =
            styles.text.fontSize;
        }}
      >
        <ICONES.RightArrow size={15} style={styles.icon} />
        <div className="title-text" style={styles.text} >
          {title}
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      flex: 1,
      marginBottom: "12px", // equivalent to `mb-3` in Tailwind
    },
    wrapper: {
      display: "flex",
      gap: "4px", // equivalent to `gap-1` in Tailwind
      alignItems: "center",
    },
    icon: {
      color: "#fff",
    },
    text: {
      fontWeight: "600", // equivalent to `font-semibold` in Tailwind
      color: "white",
      fontSize: "16px", // equivalent to `text-lg` in Tailwind
      transition: "color 0.3s ease, font-size 0.3s ease",
    },
    hoverText: {
      color: "red",
      fontSize: "16px",
    },
  };