import React, { Component } from 'react';
import ItemList from '../itemList';
import HouseDetails, { Field } from '../houseDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {
  gotService = new GotService();
  state = {
    selectedHouses: 1,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({ selectedHouses: id });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={(item) => `${item.name} `}
      />
    );
    const houseDetails = (
      <HouseDetails
        houseId={this.state.selectedHouses}
        getData={this.gotService.getHouse}
      >
        <Field field="overlord" label="Overlord" />
        <Field field="words" label="Words" />
        <Field field="region" label="Region" />
      </HouseDetails>
    );
    return <RowBlock left={itemList} right={houseDetails} />;
  }
}
