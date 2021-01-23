import {Switch, Route, Redirect}  from 'react-router-dom'
import MovieList from '../views/MovieList'
import Home from '../views/Home'
import MovieDetail from '../views/MovieDetail'


function Routes() {
    return (
        <Switch>
            <Route exact path='/movies' component={MovieList} />
            <Route exact path='/movies/:movieId' component={MovieDetail} />  
            <Route path='/redirect' render = {() => <Redirect to='/movies'/>}/>
            <Route path='/' component={Home} />
            <Route render = {() => <h1>Esta ruta no existe</h1>}/>
        </Switch>
    )
}

export default Routes