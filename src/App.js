import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import MoviePage from './components/MoviePage/MoviePage'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
      </div>
    );
  }
}

