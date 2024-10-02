import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div  className='w-full  px-8 py-4 md:px-14 md:py-6 flex flex-col  md:flex-row justify-between items-center '  >
       <h1 className=' font1 text-[8vw] md:text-[5.5vw] lg:text-[2.5vw] self-start md:self-center mb-4 md:mb-0 ' >News</h1>
     <ul className='  flex gap-10 ' >
        <li><Link  className=' hidden lg:block cursor-pointer ' >HOME</Link></li>
        
        <li><Link to='news' smooth={true} duration={500 } className=' hidden lg:block cursor-pointer ' >NEWS</Link></li>
        <li><Link to='headline' smooth={true} duration={500 } className=' hidden lg:block cursor-pointer ' >HEADLINES</Link></li>
     </ul>

      
    </div>
  ) 
}

export default Nav