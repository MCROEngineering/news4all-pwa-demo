import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { history } from 'utils/history';

class Item extends Component {
  static goBack() {
    history.goBack();
  }

  static renderPlaceholder() {
    return (
      <div>
        <div className="image-placeholder-large" />
        <p className="description-placeholder max-width" />
        <p className="description-placeholder max-width" />
        <p className="author-placeholder" />
      </div>
    );
  }

  static renderDetails(item) {
    if (item) {
      const { title, content, author, url, urlToImage } = item;

      return (
        <div>
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
      )
    }

    return <div />;
  }

  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      currentIndex: id,
    };
  }

  componentDidMount() {
    const { all: { data }, getNews } = this.props;

    if (!data.length) {
      getNews();
    }
  }

  render() {
    const { all: { data }, api } = this.props;
    const { currentIndex } = this.state;

    const shouldRenderPlaceholder = api.request && !data.length;

    const itemToRender = data[currentIndex];

    return (
      <div>
        <i onClick={() => Item.goBack()} className="fas fa-chevron-left go-back" />
        <div className="item-details">
          {shouldRenderPlaceholder ?
            Item.renderPlaceholder() :
            Item.renderDetails(itemToRender)
          }
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  all: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  getNews: PropTypes.func.isRequired,
};

export default Item;
