import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/images/logo.png';

class Navbar extends Component {
  static refresh() {
    window.location.reload();
  }

  render() {
    const { updatedAt } = this.props;
    const updatedAtLabel = `Updated: ${updatedAt}`;

    return (
      <div className="header">
        <a className="logo" href="/">
          <img src={Logo} width="48" alt="News4All" />
        </a>
        <div className="right-side">
          <span className="updated-at">{updatedAtLabel}</span>
          <i title="Reload news" onClick={() => Navbar.refresh()} className="fas fa-sync-alt" />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  updatedAt: PropTypes.string.isRequired,
};

export default Navbar;
