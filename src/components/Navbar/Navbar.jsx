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
        <a href="/">
          <img src={Logo} width="48" alt="News4All" />
        </a>
        <div className="header__right-side">
          <span className="header__updated-at">
            {updatedAtLabel}
          </span>
          <i
            className="fas fa-sync-alt pointer"
            title="Reload news"
            onClick={() => Navbar.refresh()}
          />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  updatedAt: PropTypes.string.isRequired,
};

export default Navbar;
