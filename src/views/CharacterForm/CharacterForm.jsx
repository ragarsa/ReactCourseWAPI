import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { API_URL } from '../../constants'


const initialState = {
    name: '',
    img: '',
    biography: '',
}

const CharacterForm = (props) => {

    const history = useHistory()

    const { movieId, characterId } = useParams()

    const [characterData, setCharacterData] = useState(initialState)

    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        if (characterId) {
            axios.get(`${API_URL}/movies/${movieId}`)
                .then(response => {
                    handleFindCharacterInMovie(response.data.data, characterId)
                    setIsUpdating(true)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [characterId, movieId])

    const handleFindCharacterInMovie = (movie, characterId) => {
        const character = movie.characters.find(character => character._id === characterId)
        if (character) {
            setCharacterData(character)
        } else {
            alert('No existe el personaje especificado')
        }
    }

    const handleGoBack = () => {
        history.goBack()
    }

    const handleChangeCharacterData = (event) => {
        setCharacterData({
            ...characterData,
            [event.target.name]: event.target.value
        })
    }


    const handleAddOrEditCharacter = (_event) => {
        let request

        if (isUpdating) {
            request = axios.put(`${API_URL}/movies/${movieId}/characters/${characterId}`, characterData)
        } else {
            request = axios.post(`${API_URL}/movies/${movieId}/characters`, characterData)
        }
        request.then(res => {
            console.log(res)
            alert(`Personaje ${isUpdating ? 'Actualizado' : 'Creado chido'} `)
            setTimeout(() => history.push(`/movies/${movieId}`), 1500)
        })
            .catch(err => {
                console.log(err)
            })
    }


    // if (isUpdating) {
    //     request = axios.put(
    //         `https://react-couse-actosoft-api.actosoft.com.mx/movies/${movieId}`,
    //         characterData
    //     )
    // } else {
    //     request = axios.post(
    //         'https://react-couse-actosoft-api.actosoft.com.mx/movies/',
    //         characterData
    //     )
    // }

    // request.then(response => {
    //     console.log(response)
    //     const { _id } = response.data.data.movie
    //     alert(`Película ${isUpdating ? 'Agregada' : 'Actualizada'}`)
    //     setTimeout(() => history.push(`/movies/${_id}`), 4000)
    // })
    //     .catch(error => {
    //         console.log(error)
    //         alert('Cómo se hace un backend')
    //     })


    return (
        <>
            <h2>
                {isUpdating ?
                    'Edita Personaje' :
                    'Agrega un nuevo personaje'
                }

            </h2>
            <input
                type="text"
                name='name'
                placeholder='Nombre'
                onChange={handleChangeCharacterData}
                value={characterData.name} //Es por eso que se utiliza string vacío
            />
            <input
                type="text"
                name='img'
                placeholder='URL de la imagen'
                onChange={handleChangeCharacterData}
                value={characterData.img}
            />
            <textarea
                name="biography"
                onChange={handleChangeCharacterData}
                value={characterData.biography} />

            <button onClick={handleAddOrEditCharacter}
            >
                {isUpdating ? 'Actualizar' : 'Agregar'} Personaje
            </button>

            <button onClick={handleGoBack}> Volver </button>
        </>
    )
}



export default CharacterForm