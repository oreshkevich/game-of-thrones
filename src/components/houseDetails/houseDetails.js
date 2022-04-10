import React, { Component } from 'react';
import './houseDetails.css';
import GotService from '../../services/gotService';

const Field = ({ char, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{char[field]}</span>
    </li>
  );
};

export { Field };
export default class HouseDetails extends Component {
  gotService = new GotService();
  state = {
    char: null,
  };
  componentDidMount() {
    this.updateChar();
  }
  componentDidUpdate(prevProps) {
    if (this.props.houseId !== prevProps.houseId) {
      this.updateChar();
    }
  }
  updateChar() {
    const { houseId } = this.props;
    if (!houseId) {
      return;
    }
    this.gotService.getHouse(houseId).then((char) => {
      this.setState({ char });
    });
  }
  render() {
    if (!this.state.char) {
      return <span className="select-error">Please select a character</span>;
    }
    const { char } = this.state;
    const { name } = char;
    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { char });
          })}
        </ul>
      </div>
    );
  }
}

