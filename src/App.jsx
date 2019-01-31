import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from 'utils/history';

import NewsListing from 'modules/listing';
import NewsItem from 'modules/item';
import Page404 from 'modules/404';

import Navbar from 'components/Navbar';
import ScrollToTop from 'components/ScrollToTop';

import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <div className="main">
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={NewsListing} />
            <Route path="/item/:id" name="Home" component={NewsItem} />
            <Route component={Page404} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  </div>
);

export default App;
