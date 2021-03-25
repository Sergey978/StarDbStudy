import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import './people-page.css';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service'


const Row = ({left, right}) =>{

  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  )
}


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false

  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });


  }

  render() {

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => `${item.name}(${item.gender}, ${item.birthYear})`}
      /* with spread */
      /* renderItem ={ ({name, gender, birthYear}) => `${name}(${gender}, ${birthYear}`}*/
      />
    );

    const personDetails = (<PersonDetails personId={this.state.selectedPerson} />);

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>
      <Row left = {itemList} right = {personDetails} />
      <Row left = {<p>Hello</p>}  right= {<span>World</span>} />
      </div>
    );
  }
}