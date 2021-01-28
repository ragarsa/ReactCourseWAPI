import {Switch, Route, Redirect}  from 'react-router-dom'
import MovieList from '../views/MovieList'
import Home from '../views/Home'
import MovieDetail from '../views/MovieDetail'
import MovieForm from '../views/MovieForm'

function Routes() {
    return (
        <Switch>
            <Route exact path='/movies' component={MovieList} />
            <Route exact path = '/movies/create' component = {MovieForm} />
            <Route exact path = '/movies/:movieId/edit' component = {MovieForm} />
            <Route exact path='/movies/:movieId' component={MovieDetail} />  
            <Route path='/redirect' render = {() => <Redirect to='/movies'/>}/>
            <Route path='/' component={Home} />
            <Route render = {() => <h1>Esta ruta no existe 404 </h1>}/>
            
        </Switch>
    )
}

export default Routes