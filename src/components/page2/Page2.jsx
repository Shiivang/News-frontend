// import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {NEWSContext} from '../../context/NewsContext';


const Page2 = () => {
   
   
    const {news , search , setsearch , page, setpage ,  handleNextPage, handlePreviousPage,  arti } =  useContext(NEWSContext);
//  console.log(news);

 const currentArticle = news ? news[page - 1] : null; 
 if (!currentArticle) {
   return <div>Loading article...</div>; 
 }
  

 const handleSearchChange = (e) => {
    setsearch(e.target.value);  // Update search term in context
    setpage(1);  // Reset page to 1 when searching
  };

  return (
    <div className=' w-full min-h-screen flex flex-col justify-center items-center gap-10 ' >
         <form className=' w-[80%] md:w-1/2 lg:w-1/2 h-[6vh] rounded-full border-[1px] border-black flex justify-between items-center overflow-hidden px-4 ' >

       <input type="text" value={search} placeholder='Saerch' onChange={handleSearchChange} className=' outline-none border-none  w-[80%]  ' />

       </form>

        <div className=' w-[90%] min-h-[80%] ' >
        <h1 className=' text-center font-semibold text-[8vw] md:text-[5.5vw] lg:text-[2vw] mb-5  ' >{currentArticle.title}</h1>
        <div className=' w-full text-center md:flex ' >
            <div className=' md:w-1/2 ' >
        <div  className=' w-[80%]  rounded-xl  overflow-hidden mb-3 mx-auto ' >
        <img className=' w-[100%] object-cover ' src={currentArticle.image} alt="lol" />
        </div>            
            <h2 className=' text-start text-balance md:text-center  text-[5vw] md:text-[3.5vw] lg:text-[1.1vw] ' >Description:  {currentArticle.description}</h2>
            </div>

           <div className=' md:w-1/2 flex flex-col justify-start ' >
             <h2 className=' text-start  font-[400] text-[5vw] md:text-[3.5vw] lg:text-[1.5vw] ' >{currentArticle.content }</h2>
            <a href={currentArticle.url} className=' text-start  text-blue-500 font-[400] text-[5vw] md:text-[3.5vw] lg:text-[1.5vw] mb-[10vw] ' >read more...</a>
            <h2 className='  font-[400] text-[5vw] md:text-[3.5vw] lg:text-[1.5vw] self-end  ' >Source: {currentArticle.source.name} </h2>
            </div>

            </div>
            <div className='flex justify-center items-center gap-3 mt-[5vw] ' >
        <button onClick={handlePreviousPage} disabled={page === 1}>
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/circled-left.png" alt="circled-left"/>
        </button>
        <span> {page} of {arti} </span>
        <button onClick={handleNextPage} disabled={page === arti } className=' flex justify-center items-center ' ><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/circled-right-2.png" alt="circled-right-2"/></button>
      </div>
        </div>


      
    </div>
  )
}

export default Page2