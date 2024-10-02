
import React, { useContext } from 'react'
import {NEWSContext} from '../../context/NewsContext';

const Page3 = () => {

    const {headlines, category, setCategory, } =  useContext(NEWSContext);

   
     
  return (
    <div className=' w-full min-h-screen flex flex-col justify-center items-center gap-10 ' >
         <h1  className=' text-center font-semibold text-[8vw] md:text-[5.5vw] lg:text-[2vw] mb-5 capitalize  '>Top Headlines - {category}</h1>

         <div className='  w-[90%] min-h-[80%]  ' >
            <div className=' max-w-max p-3 mb-10  rounded-full border-[1px] border-black ' >
      <select value={category} onChange={(e) => setCategory(e.target.value)} className=' outline-none  ' >
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </select>
      </div>

      <div className=' w-[100%] py-1 flex flex-col gap-6 ' >
        {headlines.map((article, index) => (
          <div key={index} className=' w-[100%] py-1  flex flex-col md:flex-row justify-between items-center gap-5 ' >

            <div  className=' w-[90%] md:w-[15%] h-full rounded-xl  overflow-hidden  ' >
        <img className=' w-[100%]  h-full object-cover ' src={article.image} alt="lol" />
        </div > 

        <div className=' w-[90%]  md:w-[80%] text-start ' >
            <h2>{article.title}</h2>
            <p> Description: {article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className=' flex gap-4 items-center text-blue-500 ' >Read more<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/3B82F6/30/long-arrow-right.png" alt="long-arrow-right"/></a>
        </div>
           
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Page3