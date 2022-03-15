import React from 'react'
import { useNavigate } from 'react-router-dom';

function PeliculaCard({ pelicula }) {
    /**
     * 
     * adult: false
        createdAt: "2022-03-10T17:06:39.000Z"
        fecha: "2021-09-13T01:24:00.000Z"
        id: 1
        image: "https://image.tmdb.org/t/p/original//mmznhaQDwlHWpUwKuNxtQiubbmM.jpg"
        popularity: 123.71
        sinopsis: "A ragtag band of humans band together in the year 2025 to fight legions of monstrous creatures rising from the sea. Using massive piloted robots to combat the alien threat, earth's survivors take the fight to the invading alien force lurking in the depths of the Pacific Ocean. Nearly defenseless in the face of the relentless enemy, the forces of mankind have no choice but to turn to two unlikely heroes -- a washed up former pilot and an untested trainee -- who now stand as earth's final hope against the mounting apocalypse."
        titulo: "Pacific Rim"
        updatedAt: "2022-03-10T17:06:39.000Z"
     */

    const navigate = useNavigate();

  return (
    <div>
        <img onClick={() => navigate(`/pelicula/${pelicula.id}`)} src={pelicula.image} alt={pelicula.titulo} />
        <div>{pelicula.titulo}</div>
        <div>{pelicula.updatedAt}</div>
    </div>
  )
}

export default PeliculaCard