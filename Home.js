import React,{ useEffect,useState} from 'react'
import axios from 'axios'
import "./Home.css"
import NewsArticle from '../../Components/NewsArticle/NewsArticle'

function Home(){
 const [news,setNews]=useState([])
 const [searchQuery,setSearchQuery]=useState("nagpur")
    const loadNews=async()=>{
        try{
const response =await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-20&sortBy=publishedAt&apiKey=9ccfcca6542a40bb8a3058c851926f5c`);
   setNews(response.data.articles)
}
catch(error){
    console.log(error)
}
    }
useEffect(()=>{
    loadNews()

},[])
    useEffect(() =>{
        loadNews()
    },[searchQuery])
    return(
         <div>
            <h1 className="hyy"> News App</h1>

            <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)} />
        
        
        <div className="news-container">

            {

                news.map((newsArticle,index)=>{
                  const { author, title ,description,  url, urlToImage, publishedAt, content }=newsArticle


               return( <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage}
               publishedAt={publishedAt} content={content} key={index}/>  ) 
            })
            }
        
        </div>
        </div>
    
             )
        }
    
    
export default Home