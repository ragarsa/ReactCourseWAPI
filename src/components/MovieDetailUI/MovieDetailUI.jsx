import CharacterCard from '../CharacterCard'
import {useHistory} from 'react-router-dom'

const MovieDetailUI = ({movie}) => {
    const history = useHistory()
    const hasCharacters = characters => {
       //Solucion 1 return characters && characters.length > 0
       //Solucion 2: State inicial 
       return characters.length > 0; 
    }
    
    const handleGoEditMovie = () => {
        history.push(`/movies/${movie._id}/edit`)
    }

    return (
        <>
        
        <h1> Detalle de la película: {movie.title} </h1>
        <img src={movie.img} alt={movie.title}/>
        <p> Descripción: {movie.description}  </p>
        <p> Duración (min): {movie.durationMinutes} </p>

        <h3> Personajes de las películas </h3>
        {hasCharacters(movie.characters) ? 
            movie.characters.map(character => 
            <CharacterCard 
                key = {character._id}
                character = {character}
            />)
            
    : <p>No hay personajes registrados</p>
    }
        
    <button onClick={handleGoEditMovie}> Editar Película </button>

        </>
    )
}

export default MovieDetailUI