import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'



import './index.css'

function MovieItem({ eachMovie }) {

    const id = eachMovie?.id.split('/')[2]
    const dispatch = useDispatch()

    const onClickMovieItem = () => {
        dispatch({type: 'setTitle', payload: eachMovie.title})
    }
    
    return (
        <NavLink to={`movies/${id}`} className="movie__item" onClick={onClickMovieItem}>
            <li>
                <img src={eachMovie?.image?.url} alt="" />
                <h2 className='movie__item__title'>{eachMovie?.title}</h2>
                <button>Play now</button>
            </li>
        </NavLink>
    )
}

export default MovieItem