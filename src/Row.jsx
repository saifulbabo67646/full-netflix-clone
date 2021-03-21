import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from './axios'
import './Row.css'
const Row = ({title, fetchurl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getData = async() => {
            const response = await axios.get(fetchurl)
            setMovies(response.data.results)
            return response
        }
        getData()
    }, [fetchurl])
    console.log(movies);

    const history = useHistory()

    const gotoMovie = (movie) => {
        history.push(`/${ (isLargeRow && 'tv') || movie.media_type === 'tv' ? 'tv' : 'movie'}/${movie.id}`)
        console.log(movie.media_type === 'movie' ? 'movie' : 'tv')
    }

    const base_url = 'https://image.tmdb.org/t/p/original'

    return (
        <div className='Row'>
            <h2>{title}</h2>

            <div className="row__posters">
                {
                    movies.map((movie) => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
                            <div className='row__wrap'>
                            
                            <img
                                onClick={() => gotoMovie(movie)}
                                key={movie.id}
                                className={`row__poster row__posterLarge`} 
                                src={`${base_url}${movie.poster_path }`} alt={movie.name}
                            />
                            {/* <span className='row__title'>{movie.title || movie.original_title}</span> */}
                        </div>
                        )
                    ))
                }
            </div>
            
        </div>
    )
}

export default Row
