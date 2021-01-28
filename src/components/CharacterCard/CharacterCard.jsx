const CharacterCard = ({character}) => {
    
    return (
        <>
        <h3>Nombre: {character.name} </h3>
        <img 
            src={character.img} 
            //onError={() => this.img.src = ""}
            alt={character.name}
        />
        <p> Biografía: {character.description} </p>
        </>
        )
}

export default CharacterCard