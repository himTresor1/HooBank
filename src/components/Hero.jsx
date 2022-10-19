import React from "react";
import styles from "../constants/styles";
import { discount, robot } from "../assets/assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={` flex md:flex-row flex-col  w-full ${styles.paddingY}`}
  >
    <div
      className={`flex-1  ${styles.flexStart}  flex-col xl:px-0 sm:px-16 px-8 mx-10`}
    >
      <div
        className={` flex flex-row items-center py-[6px] px-[10  px] bg-discount-gradient rounded-[20px] mb-2`}
      >
        <img src={discount} alt="" className="w-[32px] h-[32px]" />
        <p className={` ${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> DISCOUNT FOR {"  "}
          <span className="text-white"> 1 MONTH </span> ACCOUNT
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The next
          <br className="sm:block hidden" /> {"   "}
          <span className="text-gradient">Generation</span>{"  "} 
        
         
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
        </div>
      </div>
      <h1  className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ">
          Payment method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Our team aof experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates , annual fees.

      </p>
    </div>
    <div className="">
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[0] x-[40%] h-[35%] top-0 pink__gradient "></div>
      <div className="absolute z-[1] x-[80%] h-[75%] rounded-full  bottom-40 white__gradient "></div>
      <div className="absolute z-[0] x-[50%] h-[55%] rounded-full   right-20 bottom-20 blue__gradient "></div>
    </div>
   
    
  </section>
);

export default Hero;
