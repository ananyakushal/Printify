import React, { useLayoutEffect, useRef } from 'react';
import thumbIcon from './Connect1.png';
import etsy from './Connect2.png';
import bigecommerce from './Connect4.png';
import squarespace from './Connect5.png';
import wix from './Connect6.png';
import woo from './Connect7.png';
import prestashop from './Connect1.png';
import api from './Connect1.png';
import shopify from './Connect1.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Connect = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parentRef = useRef();

  const imagesArr = [etsy, bigecommerce, squarespace, wix, woo, prestashop, api, shopify, thumbIcon];

  useLayoutEffect(() => {
    const ctx1 = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".head",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });

      t1.to(".img1", { top: "15%", left: "75%", duration: 1.5 }, 'a')
        .to(".img2", { top: "20%", left: "35%", duration: 1.5 }, 'a')
        .to(".img3", { top: "10%", left: "15%", duration: 1.5 }, 'a')
        .to(".img4", { bottom: "10%", left: "60%", duration: 1.5 }, 'a')
        .to(".img5", { bottom: "25%", left: "70%", duration: 1.5 }, 'a')
        .to(".img6", { bottom: "30%", left: "15%", duration: 1.5 }, 'a')
        .to(".img7", { bottom: "15%", left: "25%", duration: 1.5 }, 'a');
    }, parentRef);

    return () => ctx1.revert();
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center mt-[150px]' ref={parentRef}>
      {/* Header */}
      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <p className='font-semibold text-txtColor0 text-[25px] sm:text-[40px] head'>Connect your store</p>
        <p className='text-txtColor2 text-[16px] text-center sm:text-start'>
          Printify easily integrates with major e-commerce platforms and marketplaces
        </p>

        {/* Images section */}
        <div className='w-full sm:w-[80%] h-[100vh] flex justify-center items-center relative'>
          {imagesArr.map((e, i) => (
            <img
              key={i}
              loading='lazy'
              className={`img${i} w-[55px] sm:w-[90px] hover:w-[60px] hover:sm:w-[100px] cursor-pointer transition-all p-2 sm:p-5 shadow-lg rounded-lg absolute`}
              src={e}
              alt={`Platform logo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
