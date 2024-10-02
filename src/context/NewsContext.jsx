import React, { createContext , useEffect, useState } from 'react'
import axios from 'axios';

 
export const NEWSContext = createContext()

const NewsContext = ({children}) => {
  const [news, setnews] = useState([]);
  const [search, setsearch] = useState('Technology');
  const [page, setpage] = useState(1)
  const [arti, setarti] = useState(0)
  const [headlines, setHeadlines] = useState([]);
  const [category, setCategory] = useState('general');



  useEffect(() => {
    const fatchNews = async () => {
        try {
          
        const response = await axios.get("http://localhost:3000/" , {
            params: {
                search : search  ,
                lang: 'en' , 
                country : 'us',
                max:  10 ,
                page : page ,
            }

           
        })
        // console.log(response.data.articles);
        setnews(response.data.articles);
        setarti(response.data.articles.length);
        //    console.log(response.data.articles[0].title)
        } catch (error) {
          console.log('lol')
        }
      }
    fatchNews();
  },[search])

  useEffect(() => {
    const fetchTopHeadlines = async () => {
      try {
        const response = await axios.get('http://localhost:3000/top-headlines', {
          params: {
            category: category,
            lang: 'en',
            country: 'us',
            max: 10,
          },

        });
        setHeadlines(response.data.articles);  
        console.log(response.data.articles);

      } catch (error) {
        console.error('Error fetching top headlines:', error);
      }
    };

    fetchTopHeadlines();
  }, [category]); 

  const handleNextPage = () => {
    if (page < arti) {
      setpage(page + 1);  
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setpage(page - 1);  
    }
  };


  return (
    < NEWSContext.Provider value={{
        news ,
        search ,
        setsearch ,
        page,
        setpage ,
      handleNextPage,
      handlePreviousPage,
      arti,
      headlines,
      category,
      setCategory,

    }} >
        {children}
    </NEWSContext.Provider>
  )
}

export default NewsContext