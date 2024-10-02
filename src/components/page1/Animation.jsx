import React from 'react'
import { motion } from "framer-motion";

const Animation = () => {
  return (
    <>
    <div className=' relative w-full h-full flex justify-center items-center py-[40vw] md:py-[30vw] lg:py-[12vw]  ' >
    <span className=" font1 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-[15vw] md:text-[14vw ] lg:text-[12vw] font-semibold leading-none text-transparent dark:from-white dark:to-black  uppercase ">
        Brecking
      </span>
      
   <motion.div
    initial={{
        top: '50%',
        left: '50%',
        translateY: '-50%' ,
        translateX: '-50%' ,
       
    }}
   animate={{
    rotate : 360 ,
   }}
   transition={{
    duration : 20,
    repeat : Infinity ,
    ease: "linear",
   }}
    className=' ho w-[65vw] h-[65vw] md:w-[45vw] lg:w-[30vw] md:h-[45vw] lg:h-[30vw]  rounded-full border-[1px] border-[#d3d3d3]   ' >
    <motion.h1
          initial={{
            top: '50%',
            left: '-3 %',
            translateY: '-50%' ,
            // translateX: '-50%' ,
           
        }}
          animate={{
            rotate : -360 ,
            // radius : 190
           }}
           transition={{
            duration : 20,
            repeat : Infinity ,
            ease: "linear",
           }}
            className=' absolute left-[-3%] top-[50%] translate-y-[-50%] text-2xl font1 text-[8vw] md:text-[5.5vw] lg:text-[2.5vw]  '>N</motion.h1>
    <motion.h1
          initial={{
            top: '50%',
            left: '-3 %',
            translateY: '-50%' ,
            // translateX: '-50%' ,
           
        }}
          animate={{
            rotate : -360 ,
            // radius : 190
           }}
           transition={{
            duration : 20,
            repeat : Infinity ,
            ease: "linear",
           }}
            className=' absolute right-[-3%] top-[50%] translate-y-[-50%] text-2xl font1 text-[8vw] md:text-[5.5vw] lg:text-[2.5vw]'>S</motion.h1>
   
   </motion.div> 

   <motion.div
     initial={{
            top: '50%',
            left: '50%',
            translateY: '-50%' ,
            translateX: '-50%' ,
           
        }}
     animate={{
        rotate : -360 ,
       }}
       transition={{
        duration : 20,
        repeat : Infinity ,
        ease: "linear",
       }}
       className=' ho  w-[32.5vw] h-[32.5vw] md:w-[22.5vw] lg:w-[15vw] md:h-[22.5vw] lg:h-[15vw]  rounded-full border-[1px] border-[#d3d3d3]  '>
         <motion.h1
          initial={{
            top: '50%',
            left: '-3 %',
            translateY: '-50%' ,
            // translateX: '-50%' ,
           
        }}
          animate={{
            rotate : 360 ,
            // radius : 190
           }}
           transition={{
            duration : 20,
            repeat : Infinity ,
            ease: "linear",
           }}
          className=' absolute left-[-3%] top-[50%] translate-y-[-50%]  font1 text-[7vw] md:text-[4.5vw] lg:text-[1.8vw]  '
          >E</motion.h1>
         <motion.h1
          initial={{
            top: '50%',
            left: '-3 %',
            translateY: '-50%' ,
            // translateX: '-50%' ,
           
        }}
          animate={{
            rotate : 360 ,
            // radius : 190
           }}
           transition={{
            duration : 20,
            repeat : Infinity ,
            ease: "linear",
           }} className=' absolute right-[-3%] top-[50%] translate-y-[-50%]  font1 text-[7vw] md:text-[4.5vw] lg:text-[1.8vw] '>W</motion.h1>

    </motion.div>
  
    </div>
   </>
  )
}

export default Animation

