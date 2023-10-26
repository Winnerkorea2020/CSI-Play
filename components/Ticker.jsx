"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/Ticker.module.css";
import { tickerItems } from "@/constant";
import Link from "next/link";

const Ticker = ({}) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const tickerRef = useRef(null);

  useEffect(() => {
    const tickerElement = tickerRef.current;

    const handleAnimation = () => {
      if (isAnimating) {
        tickerElement.style.animationPlayState = "running";
      } else {
        tickerElement.style.animationPlayState = "paused";
      }
    };

    handleAnimation();

    return () => {
      tickerElement.style.animationPlayState = "paused";
    };
  }, [isAnimating]);

  const handleHover = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className=" flex items-center justify-start bg-white px-4 py-2.5 w-full">
      <div className="flex w-fit tracking-tighter pr-3">
        <span className="hidden xl:inline-block text-xs xl:text-sm font-semibold w-max pr-2 text-amber-500">
          CSI-Play
        </span>
        <span className="inline-block text-xs xl:text-sm font-semibold w-max pr-2">
          Ticker!
        </span>
      </div>
      <div className={`flex items-center overflow-hidden w-full `}>
        <div className={`flex ${styles.tickerContainer}`} ref={tickerRef}>
          <ul className="flex items-center justify-start gap-8 w-full">
            {tickerItems.map((item, index) => (
              <li key={index} className="font-medium text-sm w-max">
                <Link href={item.url}>
                  <span className="bg-gray-200 rounded mr-1 px-2">
                    {item.tag}
                  </span>
                  <span
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    className=" text-xs"
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Ticker;
