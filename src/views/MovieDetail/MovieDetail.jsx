import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' //se obtienen parámetros de la URL
import MovieDetailUI from '../../components/MovieDetailUI'


const movieInitialState = {
    title: null, 
    img: null, 
    description: null, 
    durationMinutes: null,
    characters: []
}

function MovieDetail(props) {

    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [ movie, setMovie ] = useState(movieInitialState)

    useEffect(() => {
        setLoading(true) ;

        axios.get(`https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`)
            .then(response => {
                const movie = response.data.data
                setMovie(movie)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [movieId])

    return (
        <>
            {!loading 
            ? <MovieDetailUI 
                movie={movie} /> 
            : <p> Cargando datos de la película </p>
            }


        </>
    )
}

export default MovieDetail