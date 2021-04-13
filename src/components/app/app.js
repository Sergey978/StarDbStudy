import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from "../error-boundry";
import ItemDetails from "../item-details";


import './app.css';
import Row from '../row';

export default class App extends Component {

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {    

      const personDetails = (
        <ItemDetails  itemId = {11} />
      )

      const starshipDetails = (
        <ItemDetails  itemId = {5} />
      )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />   

          <Row
          Left ={personDetails}
          Right ={starshipDetails}
          /> 
         
        </div>
      </ErrorBoundry>
    );
  }
}
