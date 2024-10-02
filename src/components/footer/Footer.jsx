import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full py-[4vw] ' >
        <div className=' text-center w-full lg:h-[4vw] flex flex-col md:flex-row justify-between items-center md:px-14  ' >
        <h1 className='  font1 mx-auto md:mx-0 text-[8vw] md:text-[5.5vw] lg:text-[2.5vw] self-start md:self-center mb-4 md:mb-0 ' >News</h1>
        <div>
            <h2>Contact us</h2>
            <h2>+ 007-003-0000</h2>
            <h2>1280 Rose Rd | Lake Zurich, India 60047</h2>
        </div>
        <div>
            <h2>©2024.Shivang puri</h2>
            <h2>Corporation. All rights reserved.
            </h2>
        </div>
       
        </div>
    </div>
  )
}

export default Footer