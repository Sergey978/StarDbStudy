import React, { Component } from "react";

import Spinner from "../spinner/spinner";

import "./item-list.css";

export default class ItemList extends Component {
  

  state = {
    itemList: null,
  };

  componentDidMount() {

    const { getData} = this.props;


    getData()
    .then((itemList) => {
      this.setState({
        itemList: itemList,
      });
    });
  }
  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList: peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
