'use client'
import React, { useEffect, useState } from "react";
import './customText.css'

export default function CustomFadedAnimationText({ text }: { text: string }) {

  console.log('@@@@@@ text =====>>>>>>', text)

  const [visibleWords, setVisibleWords] = useState<string[]>([]);

  useEffect(() => {
    const words = text.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      if (index < words.length) {
        setVisibleWords((prev) => [...prev, words[index]]);
        index++;
      } else {
        clearInterval(interval); // Stop when all words are displayed
      }
    }, 900); // Delay between words

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {visibleWords.map((word, index) => (
        <span
          key={index}
          style={{
            opacity: 1,
            color: 'red',
            fontSize: 30,
            animation: "fadeIn 0.5s ease forwards",
            animationDelay: `${index * 0.5}s`, // Add delay for each word
            marginRight: "8px",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
