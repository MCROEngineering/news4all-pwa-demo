import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      currentIndex: id,
    }
  }

  componentDidMount() {
    const { all: { data }, getNews } = this.props;

    if (!data.length) {
      getNews();
    }
  }

  render() {
    const { all: { data } } = this.props;
    const { currentIndex } = this.state;

    const itemToRender = data[currentIndex];

    if (itemToRender) {
      const { title, content, author, url, urlToImage } = itemToRender;

      return (
        <div className="item-details">
          <div>
            {urlToImage && <img src={urlToImage} alt="" />}
          </div>
          <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>by {author}</p>
          </div>
          <div>Find out more at <a href={url}>original source</a>.</div>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }

  }
}

Item.propTypes = {
  all: PropTypes.shape({}).isRequired,
  getNews: PropTypes.func.isRequired,
};

export default Item;
