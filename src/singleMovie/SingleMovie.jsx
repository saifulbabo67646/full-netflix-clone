import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import Nav from '../Nav'
import axios from '../axios'
import './SingleMovie.css'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'



const SingleMovie = () => {
    const [movie, setMovie] = useState({})
    const [youtubeId, setYoutubeId] = useState('')
    const [arr, setArr] = useState([])
    const [allCast, setallCast] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [genres, setGenres] = useState([])
    const ref = useRef()
    useEffect(async() => {
       const res = await axios.get(`${moviePath}?api_key=ef42dbf0473eec0d9db4088d68790e9c&append_to_response=videos`)
       setMovie(res.data)
       setYoutubeId(res.data.videos.results[0].key)
       setArr(res.data.videos.results)
       setGenres(res.data.genres)
       console.log(res.data)
       
       return res
    }, [])

    useEffect(async() => {
        const cast = await axios.get(`${moviePath}/credits?api_key=ef42dbf0473eec0d9db4088d68790e9c`)
        setallCast(cast.data.cast)
        return cast
    }, [])
    console.log(youtubeId)
    const base_url = 'https://image.tmdb.org/t/p/original'

    const location = useLocation()
    const moviePath = location.pathname
    // const MovieId = (String(location.pathname).split("/")[2])

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
        <div>
            <Nav />
            <div className='signleMovie__wrap'>
                <div className='container pt-5'>
                   <Plyr 
                    source={{
                        type: 'video',
                        sources: [
                            {
                                src: `${youtubeId}`,
                                provider: 'youtube'
                            }
                        ]
                    }}
                   />
                    <div className='col-6'>
                    <Dropdown direction='right' isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                           All Trailer
                        </DropdownToggle>
                        <DropdownMenu>
                            {/* <DropdownItem>Some Action</DropdownItem> */}
                            {
                                arr.map(b => <button className='btn btn-success m-1' onClick={() => setYoutubeId(b.key)}>{b.name}</button> )
                            }
                        </DropdownMenu>
                    </Dropdown>
                    </div>  
                </div>
                <div style={{
                    background: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                }}>

                
                <div className='singleMovie__details my-5'>
                    <div className='d-flex align-center justify-content-md-center justify-content-between'>
                        <div className='col-6 col-md-4'>
                            <img className='singleMovie__poster img-fluid rounded img-thumbnail mx-5 my-4' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt=""/>
                        </div>
                        <div className='col-6 col-md-8 text-center text-md-left mx-md-5'>
                            <h2 className='singleMovie__title'>{movie.title || movie.name || movie.original_name}</h2>
                            <ul className='singleMovie__info'><li> <span className='singleMovie__info__gray'>Realease Date: </span> {movie.release_date || movie.first_air_date} </li> <li> <span className='singleMovie__info__gray'>Genres:  </span> {genres.map(genre => <span>{genre.name},</span>)} </li> {movie.runtime && <li> <span className='singleMovie__info__gray'>Length: </span> {movie.runtime} min</li>} </ul>
                            
                            <div className='singleMovie__over'>
                                <h4 className='singleMovie__rating'><span className='singleMovie__info__gray'>Rating: </span> <span className='singleMovie__rating__rate'>{movie.vote_average}</span></h4>
                                <h3 className='singleMovie__overview__title'>Overview</h3>
                                <p className='singleMovie__overview'>{movie.overview}</p>
                                <h5 className='singleMovie__creator'>{movie.tagline && movie.tagline}</h5>
                                {movie.tagline && <p className='singleMovie__creator__title'>Tagline</p>} 
                            </div>

                        </div>
                       
                    </div>
                </div>
                </div>
                
                <div className='singleMovie__cast__head'>
                    <h3 className='singleMovie__cast'>Cast </h3>
                    <div className='singleMovie__cast__wrap'>
                        
                        {
                            allCast.map(cast => ( cast.profile_path && 
                                <div className='singleMovie__cast__card'>
                                    <img className='singleMovie__cast__card__img' src={`https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`} alt=""/>
                                    <h5 className='singleMovie__cast__name'>{cast.original_name || cast.name}</h5>
                                    <span className='singleMovie__cast__title'>{cast.character}</span>
                                </div>
                            ))
                        }
                        
                        
                        
                        
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SingleMovie
