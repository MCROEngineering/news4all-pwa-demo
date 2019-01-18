import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from 'utils/history';

import NewsListing from 'modules/listing';
import NewsItem from 'modules/item';
import Page404 from 'modules/404';

import NavBar from 'components/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="main">
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={NewsListing} />
              <Route path="/item/:id" name="Home" component={NewsItem} />

              <Route component={Page404} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
