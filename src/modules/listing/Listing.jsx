import React, { Component } from 'react';

class Listing extends Component {
  render() {
    return (
      <div>
        Listing
      </div>
    );
  }
}

Listing.propTypes = {
  // apiStatus: PropTypes.shape({}).isRequired,
  // currentRFP: PropTypes.shape({}).isRequired,
  // getOneRFP: PropTypes.func.isRequired,
  // location: PropTypes.shape({}),
  // removeRFP: PropTypes.func.isRequired,
  // updateRFPApi: PropTypes.shape({}).isRequired,
};

Listing.defaultProps = {
  // location: {},
};

export default Listing;
