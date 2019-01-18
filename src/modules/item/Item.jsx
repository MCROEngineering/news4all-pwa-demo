import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        Item
      </div>
    );
  }
}

Item.propTypes = {
  // apiStatus: PropTypes.shape({}).isRequired,
  // currentRFP: PropTypes.shape({}).isRequired,
  // getOneRFP: PropTypes.func.isRequired,
  // location: PropTypes.shape({}),
  // removeRFP: PropTypes.func.isRequired,
  // updateRFPApi: PropTypes.shape({}).isRequired,
};

Item.defaultProps = {
  // location: {},
};

export default Item;
