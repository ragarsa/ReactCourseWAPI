import './movieCard.css'

const MovieCard = ({ movie, handleShowMovieDetail }) => {
    const {title, img, description, durationMinutes} = movie
    return (
        <div 
        className='movieList-item' 
        onClick={() => handleShowMovieDetail(movie._id)}
        >
            <h3>
                {title}
            </h3>
            <img src={img} alt={`Foto de la pelícual ${title}`} className='img-card' />
            <p>Sinopsis: {description}</p>
            <p>Duración en minutos: {durationMinutes} </p>
        </div>

    )
}

export default MovieCard

