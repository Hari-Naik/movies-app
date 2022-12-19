import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { movieData } from '../../data/exampleResponse'

import './index.css'
import MovieItem from '../MovieItem'

function Home() {
  const [movies, setMovies] = useState([])
  const [moviesPerPage, setMoviesPerPage] = useState(9);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '858131ba66msh781ecf934ebaa6cp1a72a5jsn738f592f04c8',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    }
  
  const response = await fetch('https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=20&sortArg=moviemeter%2Casc', options);
    const data = await response.json()
    setMovies(data.results);
    // console.log(data.results[0].image.url)

    };

  

  useEffect(() => {
    fetchData()
  })

  const onSetMoviesPerPage = () => {
    setMoviesPerPage(prevState => prevState + 9);
  }

  return (
    <div className='home'>
      <Header />
      <div className="container">
        <ul className='movies__list'>
          {movieData.slice(0, moviesPerPage).map(eachMovie => (
           <MovieItem key={eachMovie.id} eachMovie={eachMovie}/>
          ))}
        </ul>
        {moviesPerPage >= 20 ? '' : <button className='seeMore__btn' onClick={onSetMoviesPerPage}>see more</button>}
      </div>
    </div>
  )
}

export default Home