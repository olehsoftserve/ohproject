import React, { Fragment } from "react";
import { Header, Footer } from './Components/Layouts'
import Movies from "./Components/Movies";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {MovieDetails} from "./Components/Movies/MovieDetails";

console.log(Header)
export default () => {

  return <Fragment>

    <Header/>

    <BrowserRouter>

      <Switch>
        <Route exact path='/movies' component={Movies}/>
        <Route exact path='/movies/:id' component={MovieDetails}/>
        <Route path='*' component={() => '404 Not found'}/>
      </Switch>

    </BrowserRouter>

    <Footer />

  </Fragment>
}


