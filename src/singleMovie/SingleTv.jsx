// import React from 'react'
// import { useEffect, useState } from 'react'
// import {useLocation} from 'react-router-dom'
// import axios from 'axios'
// import './SingleMovie.css'

// const SingleTv = () => {
//     const [movie, setMovie] = useState({})
//     useEffect(async() => {
//        const res = await axios.get(`https://api.themoviedb.org/3${moviePath}?api_key=ef42dbf0473eec0d9db4088d68790e9c&append_to_response=videos`)
//        setMovie(res.data)
//        console.log(res.data)
//        return res
//     }, [])

//     const base_url = 'https://image.tmdb.org/t/p/original'

//     const location = useLocation()
//     const moviePath = location.pathname
//     return (
//         <div style={{color: 'white'}}>
//             <h2>{movie.name}</h2>
//         </div>
//     )
// }

// export default SingleTv
