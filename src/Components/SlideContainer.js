import React from 'react'
import styled from 'styled-components'
import MovieSlider from "./MovieSlider"
const SlideContainer = ({movies}) => {

    const getMoviesinBetween=(start,end)=>{
        return movies.slice(start,end)
    }
  return (
    <div className='SliderWrapper'>
        <MovieSlider data={getMoviesinBetween(0,10)} title='Only On Netflix'/>
        <MovieSlider data={getMoviesinBetween(10,20)} title='Trending now'/>
        <MovieSlider data={getMoviesinBetween(20,30)} title='Popular On Netflix'/>
        <MovieSlider data={getMoviesinBetween(30,40)} title='Romantic Movie'/>
        <MovieSlider data={getMoviesinBetween(40,50)} title='Epic'/>
        <MovieSlider data={getMoviesinBetween(50,60)} title='New Releases'/>
        <MovieSlider data={getMoviesinBetween(60,70)} title='Action Movies'/>
    </div>
  )
}

export default SlideContainer
