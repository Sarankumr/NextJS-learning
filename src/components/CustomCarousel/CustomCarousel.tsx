
'use client';
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function CustomCarousel({ data = {} }: any) {
  const { bootstrap } = data.items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
    >
      {bootstrap.map((item: any) => (
        <Carousel.Item key={item.id} interval={3000}>
            <Image 
              alt={"slides"} 
              src={item.imageUrl}
              style={{ borderRadius: 20, height: 550, objectFit: 'cover'   }}
            />
          {/* <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button className="btn btn-danger">Visit Docs</button>
              </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

