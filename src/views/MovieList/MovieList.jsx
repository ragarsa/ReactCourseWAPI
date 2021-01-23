import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import './movieList.css'


const MovieList = (props) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        // fetch('http://react-couse-actosoft-api.actosoft.com.mx/movies')
        // .then(data => console.log(data))
        // .then(data => {
        //     console.log(data.data)
        //     setMovies(data.data)
        // })
        // .catch(error => console.log(error))

        setLoading(true)
        axios.get('http://react-couse-actosoft-api.actosoft.com.mx/movies')
            .then(res => {
                const { data } = res.data;
                console.log(data) ;
                setMovies(data);
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    const handleShowMovieDetail = (id) => {
        props.history.push(`/movies/${id}`) //Registro de todas las rutas
    }

    return (
        <div className='movieList-container'>
            <h1> Estamos de regreso  </h1>
            {!loading ? movies.map(movie => 
                <MovieCard
                    handleShowMovieDetail = {handleShowMovieDetail}
                    key={movie._id}
                    movie = {movie}
                />
            ):<p> Cargando datos </p> } 
        </div>
    )
}

export default MovieList