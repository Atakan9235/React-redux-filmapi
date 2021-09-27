import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/Movieapi";
import {APIKey} from "../../common/apis/Movieapikey";
import { addMovies } from "../../features/movies/movieSlice";


function Home() {
  const movieText="ring"
     const dispatch = useDispatch();
     
  useEffect(() => {
    
    const fetchMovies =async()=>{
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      )
  .catch((err)=>{
    console.log('res',err)
  })
  dispatch(addMovies(response.data));
  console.log('res')
  
  }
    
    
    fetchMovies()
  }, []);
    return (
        <div>
      <div className="banner-img"></div>
      <MovieListing />
      
    </div>

    )
}

export default Home
