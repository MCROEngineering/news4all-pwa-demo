import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthorAndDate from 'components/AuthorAndDate';
import Img from 'components/ImgWrapper';

class Listing extends Component {
  static renderPlaceholders() {
    const placeholdersToRender = [];

    for (let i = 0; i < 5; i += 1) {
      placeholdersToRender.push(
        <div key={i} className="listing__item row">
          <div className="listing__image-placeholder col-md-4 col-xs-2" />
          <div className="col-md-8 col-xs-10">
            <div className="listing__link-placeholder" />
            <p className="description-placeholder" />
            <p className="author-placeholder" />
          </div>
        </div>,
      );
    }

    return placeholdersToRender;
  }

  static renderItems(data) {
    return (
      data.map((item, index) => {
        const { title, description, author, urlToImage, publishedAt } = item;

        return (
          <div className="listing__item" key={title}>
            <div>
              <Img src={urlToImage} />
            </div>

            <div className="listing__content">
              <div>
                <Link to={`/item/${index}`}>
                  <h3>{title}</h3>
                </Link>
              </div>

              <AuthorAndDate
                author={author}
                publishedAt={publishedAt}
              />

              <p>{description}</p>
            </div>
          </div>
        );
      })
    );
  }


  componentDidMount() {
    const { getNews } = this.props;

    getNews();
  }

  render() {
    const { all: { data }, api } = this.props;
    const shouldRenderPlaceholders = api.request && !data.length;

    return (
      <div className="listing">
        {shouldRenderPlaceholders
          ? Listing.renderPlaceholders()
          : Listing.renderItems(data)
        }
      </div>
    );
  }
}

Listing.propTypes = {
  all: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  getNews: PropTypes.func.isRequired,
};

export default Listing;
