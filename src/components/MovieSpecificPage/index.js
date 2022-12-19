import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../Header'
import MovieItem from '../MovieItem'

import { movieData, synopses } from '../../data/exampleResponse'




import './index.css'

function MovieSpecific() {
  const [text, setText] = useState('')
  const { id } = useParams()
  const title = useSelector((state) => state?.title)


  const movie = movieData.filter(movie => movie?.id.includes(id))[0]
  
  const hour = parseInt(movie?.runningTimeInMinutes / 60)
  const min = (movie?.runningTimeInMinutes - (hour * 60));

  // const [movie, setMovie] = useState()

  // const fetchData = async () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '858131ba66msh781ecf934ebaa6cp1a72a5jsn738f592f04c8',
  //       'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  //     }
  //   }

  // const response = await fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=${title}&limit=20&sortArg=moviemeter%2Casc`, options);
  //   const data = await response.json()
  //  console.log(data)

  //   };



  // useEffect(() => {
  //   fetchData()
  // })

  const fetchSynopsis = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '858131ba66msh781ecf934ebaa6cp1a72a5jsn738f592f04c8',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-synopses?tconst=${id}`, options)
    const text = await response.json()
    // console.log(text)
    setText(text)
  }

  useEffect(() => {
    fetchSynopsis()
  }, [])
  

  function truncate(str,n){
        return str?.length > n ?str.substr(0, n-1)+"...":str;
    }



  return (
    <div className='movie__specific__page'>
      <Header />
      <div className="movie__container">
        <div className="movie__info__container">
          <div className='movie__img'>
            <img src={`${movie?.image?.url}`} alt="" />
          </div>
          <div className='movie__info'>
            <div>
               <h2>{movie?.title}</h2>
              <p>{movie?.titleType}</p>
              <p>{movie?.runningTimeInMinutes ? `Duration:${hour}:${min} hr` : ''}</p>

            </div>
              <div className="btns__contianer">
                <button className='watchNow__btn'>Watch now</button>
                 <button className='watchLater__btn'>Watch Later</button>
              </div>
          </div>
        </div>
        <div className="movie__text">
          <p>{truncate(synopses?.text, 3200)}</p>
        </div>
        <div className="similar__movies">
          <h2>Similar Movies</h2>
          <ul>
            {movieData.slice(1, 5).map(movie => (
            <MovieItem key={movie?.id} eachMovie={movie}/>
            ))}
          </ul>
        </div>
        </div>
      </div>
  )
}

export default MovieSpecific