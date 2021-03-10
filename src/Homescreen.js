import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import request from './Request'
import Row from './Row'

import './Homescreen.css'
const Homescreen = () => {
    return (
        <div style={{overflow: 'hidden'}}>
           
            <Nav />
            <Banner />
            
           <Row 
            title='NETFLIX ORIGINALS'
            fetchurl={request.fetchNetflixOriginals}
            isLargeRow
           />
           <Row 
            title='TRENDING NOW'
            fetchurl={request.fetchTrending}
           />
           <Row 
            title='COMEDY MOVIES'
            fetchurl={request.fetchComedyMovies}
           />
           <Row 
            title='HORROR MOVIES'
            fetchurl={request.fetchHorrorMovies}
           />
           <Row 
            title='ROMANCE MOVIES'
            fetchurl={request.fetchRomanceMovies}
           />
           <Row 
            title='DOCUMENTARIES'
            fetchurl={request.fetchDocumentaries}
           />
        </div>
    )
}

export default Homescreen
