
import  {useHistory} from 'react-router-dom' ; 



const CharacterCard = ({character, movieId, handleDeleteCharacter}) => {
    
    const history = useHistory()

    const handleGoToEditCharacter = () => {
        history.push(`/movies/${movieId}/characters/${character._id}/edit`)
    }



    return (
        <>
        <h3>Nombre: {character.name} </h3>
        <img 
            src={character.img} 
            //onError={() => this.img.src = ""}
            alt={character.name}
        />
        <p> Biografía: {character.biography} </p>
        <div className="buttons-container">
            <button onClick = {handleGoToEditCharacter}> Editar personaje</button>
            <button onClick = {() => handleDeleteCharacter(character._id)}>Eliminar personaje </button>
        </div>
        </>
        )
}

export default CharacterCard