import React, { useEffect, useState } from 'react'
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

    const base_url = 'https://image.tmdb.org/t/p/original'

    return (
        <div className='Row'>
            <h2>{title}</h2>

            <div className="row__posters">
                {
                    movies.map((movie) => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <div>
                            
                            <img
                                key={movie.id}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                            />
                        </div>
                        )
                    ))
                }
            </div>
            
        </div>
    )
}

export default Row
