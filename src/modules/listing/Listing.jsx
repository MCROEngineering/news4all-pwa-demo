import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Listing extends Component {
  componentDidMount() {
    const { getNews } = this.props;

    getNews();
  }

  render() {
    const { all: { data } } = this.props;

    return (
      <div className="listing">
        {data.map((item, index) => {
          const { title, description, author, urlToImage } = item;

          return (
            <div className="listing-item" key={index}>
              <div>
                <Link to={`/item/${index}`}>
                  <h3>{title}</h3>
                </Link>
                <p>{description}</p>
                <p>by {author}</p>
              </div>
              <div>
                {urlToImage && <img width="170" src={urlToImage} alt="" />}
              </div>
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
