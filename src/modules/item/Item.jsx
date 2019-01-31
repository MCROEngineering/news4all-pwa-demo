import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { history } from 'utils/history';

import AuthorAndDate from 'components/AuthorAndDate';
import Img from 'components/ImgWrapper';

class Item extends Component {
  static goBack() {
    history.goBack();
  }

  static renderPlaceholder() {
    return (
      <div>
        <p className="item-details__title-placeholder max-width" />
        <div className="item-details__image-placeholder max-width" />
        <p className="description-placeholder max-width" />
        <p className="description-placeholder max-width" />
        <p className="description-placeholder max-width" />
        <p className="author-placeholder" />
      </div>
    );
  }

  static renderDetails(item) {
    if (item) {
      const { title, content, description, author, url, urlToImage, publishedAt } = item;

      return (
        <div>
          <h2>{title}</h2>

          <AuthorAndDate
            author={author}
            publishedAt={publishedAt}
          />

          <Img src={urlToImage} />

          <p>{content || description}</p>

          <div className="item-details__original-source">
            <a href={url}>View original source</a>
            .
          </div>
        </div>
      );
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
      <div className="item-details">
        <div className="item-details__go-back pointer" onClick={() => Item.goBack()}>
          <i className="fas fa-chevron-left" />
          <span>Back</span>
        </div>
        <div className="item-details__content">
          {shouldRenderPlaceholder
            ? Item.renderPlaceholder()
            : Item.renderDetails(itemToRender)
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
  match: PropTypes.shape({}).isRequired,
};

export default Item;
