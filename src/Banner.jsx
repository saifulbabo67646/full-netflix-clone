import React, { useEffect, useState } from 'react'

import axios from './axios'
import requests from './Request'

import './Banner.css'
const Banner = () => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request
        }
        fetchData()
    }, [])

    console.log(movie);

    const truncate = (str, num) => {
        return str?.length > num ? str.substr(0, num - 1) + '...' : str 

    }

    return (
        <header className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
        }}>
            <div className='banner__contents'>
                <h2 className="banner__title">
                   {movie.name || movie.original_name || movie.title}
                </h2>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <p className='banner__description'>
                     {
                         truncate(`${movie.overview}`, 150)
                     }
                </p>
            </div>

            <div className='banner--fadeBottom'/>
            

        </header>
    )
}

export default Banner
