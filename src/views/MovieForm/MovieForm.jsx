import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'


const initialState = {
    title: '',
    img: '',
    description: '',
    durationMinutes: 0,

}

const MovieForm = (props) => {

    const history = useHistory()
    const { movieId } = useParams()

    const [movieData, setMovieData] = useState(initialState)

    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        if (movieId) {
            axios.get(`https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`)
                .then(response => {
                    const movie = response.data.data
                    setMovieData(movie)
                    setIsUpdating(true)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [movieId])

    const handleChangeMovieData = (event) => {
        setMovieData({
            ...movieData,
            [event.target.name]: event.target.value
        })
    }


    const handleAddMovie = (event) => {
        let request

        if (isUpdating) {
            request = axios.put(
                (`https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`, movieData)
            )
        } else {
            request = axios.post(
                (`https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`, movieData)
            )
        }

            request.then(response => {
            console.log(response)
            const { _id } = response.data.data
            alert(`Película ${isUpdating ? 'Agregada' : 'Actualizada'}`)
            setTimeout(() => history.push(`/movies/${_id}`), 4000)
        })
    .catch(error => {
        console.log(error)
        alert('Cómo se hace un backend')
    })
    }

return (
    <>
        <h2>
            {isUpdating ?
                'Edita la Película' :
                'Agrega una nueva película'
            }

        </h2>
        <input
            type="text"
            name='title'
            placeholder='Título'
            onChange={handleChangeMovieData}
            value={movieData.title} //Es por eso que se utiliza string vacío
        />
        <input
            type="text"
            name='img'
            placeholder='URL de la imagen'
            onChange={handleChangeMovieData}
            value={movieData.img}
        />
        <textarea
            name="description"
            onChange={handleChangeMovieData}
            value={movieData.description} />
        <input
            type="number"
            name='durationMinutes'
            placeholder='Duración en minutos'
            onChange={handleChangeMovieData}
            value={movieData.durationMinutes}
        />
        <button onClick={handleAddMovie}>
            {isUpdating ? 'Actualizar' : 'Agregar'}
        </button>
    </>
)
}

export default MovieForm