import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom' //se obtienen parámetros de la URL
import MovieDetailUI from '../../components/MovieDetailUI'
import { API_URL } from '../../constants'


const movieInitialState = {
    title: null,
    img: null,
    description: null,
    durationMinutes: null,
    characters: []
}

function MovieDetail(props) {
    const history = useHistory()
    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState(movieInitialState)

    const getMovie = useCallback(
        () => {
            axios.get(`${API_URL}/movies/${movieId}`)
                .then(response => {
                    const movie = response.data.data
                    setMovie(movie)
                    setLoading(false)
                })
                .catch(error => console.log(error))
        },
        [movieId]
    )

    useEffect(() => {
        setLoading(true);
        getMovie()
    }, [getMovie])

    const handleDeleteMovie = () => {
        if (window.confirm('¿Estás seguro de eliminar la película?')) {
            axios.delete(`${API_URL}/movies/${movieId}`)
                .then(_response => {
                    console.log(_response)
                    alert('Película eliminada con éxito')
                    setTimeout(() => history.push('/movies'), 2000)

                })
                .catch(error => {
                    alert('Hubo un error')
                    console.log(error)
                })
        }
    }

    const handleDeleteCharacter = (characterId) => {
        if (window.confirm('¿Estás seguro de eliminar el personaje?')) {
            axios.delete(`${API_URL}/movies/${movieId}/characters/${characterId}`)
                .then(_response => {
                    console.log(_response)
                    alert('Personaje eliminado con éxito')
                    setTimeout(() => 
                        history.push(`/movies/${movieId}`), 1000)

                })
                .catch(error => {
                    alert('Hubo un error')
                    console.log(error)
                })
        }
    }


    return (
        <>
            {!loading
                ? <MovieDetailUI
                    movie={movie}
                    handleDeleteMovie={handleDeleteMovie}
                    handleDeleteCharacter={handleDeleteCharacter} />
                : <p> Cargando datos de la película </p>
            }


        </>
    )
}

export default MovieDetail