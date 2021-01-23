import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' //se obtienen parámetros de la URL

function MovieDetail(props) {

    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [ movie, setMovie ] = useState({})

    useEffect(() => {
        setLoading(true) ;

        axios.get(`http://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`)
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
            ? <h1> Detalle de la película: {movie.title} </h1>
            : <p> Cargando datos de la película </p>
            }


        </>
    )
}

export default MovieDetail