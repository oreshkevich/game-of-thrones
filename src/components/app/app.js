import React, { Component } from 'react';
// import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';

import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import BooksPage from '../booksPage';
import HousesPage from '../housesPage';
import GotService from '../../services/gotService';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default class App extends Component {
  gotService = new GotService();

  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };

  render() {
    const char = this.state.showRandomChar ? <RandomChar /> : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <BrowserRouter>
        <div className="app">
          <div className="container">
            <Header />
          </div>
          <div className="container">
            <div className="row">
              <div className="col" md="6" lg={{ size: 5, offset: 0 }}>
                {char}
                <button className="toggle-btn" onClick={this.toggleRandomChar}>
                  Toggle random character
                </button>
              </div>
            </div>
            <Routes>
              <Route path="/characters" element={<CharacterPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/houses" element={<HousesPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

