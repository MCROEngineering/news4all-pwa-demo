import React from 'react';

import Logo from 'assets/images/logo.png';

const Navbar = () => (
  <div className="header">
    <a href="/">
      <img className="logo" src={Logo} alt="" />
    </a>
  </div>
);

export default Navbar;
