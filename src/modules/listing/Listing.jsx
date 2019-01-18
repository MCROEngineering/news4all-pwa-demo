import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Listing extends Component {
  componentDidMount() {
    const { getNews } = this.props;

    getNews();
  }

  render() {
    const { all: { data } } = this.props;

    console.log('Data: ', data);

    return (
      <div>
        Listing
        {data.map((item, index) => {
          const { title, description, author } = item;

          return (
            <div key={index}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>by {author}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

Listing.propTypes = {
  all: PropTypes.shape({}).isRequired,
  getNews: PropTypes.func.isRequired,
};

export default Listing;
