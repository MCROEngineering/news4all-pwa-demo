import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import Img from 'components/ImgWrapper';

class Listing extends Component {
  static renderPlaceholders() {
    const placeholdersToRender = [];

    for (let i = 0; i < 5; i++) {
      placeholdersToRender.push(
        <div key={i} className="listing-item">
          <div>
            <div className="link-placeholder" />
            <p className="description-placeholder" />
            <p className="author-placeholder" />
          </div>
          <div className="image-placeholder" />
        </div>
      );
    }

    return placeholdersToRender;
  }

  static renderItems(data) {
    return (
      data.map((item, index) => {
        const { title, description, author, urlToImage, publishedAt } = item;
        const publishDate = moment(publishedAt).fromNow();

        return (
          <div className="listing-item" key={index}>
            <div>
              <Img src={urlToImage} />
            </div>
            <div className="listing-item-content">
              <Link to={`/item/${index}`}>
                <h3>{title}</h3>
              </Link>
              <div className="author-and-date">
                <div>{author && `by ${author}`}</div>
                {author && <span>|</span>}
                <div className="date">
                  <i className="far fa-calendar" />
                  {publishDate}
                  </div>
              </div>
              <p>{description}</p>
            </div>
          </div>
        )
      })
    )
  }


  componentDidMount() {
    const { getNews } = this.props;

    getNews();
  }

  // renderUpdatedDate() {
  //   const { updatedAt } = this.props;
  //
  //   if (updatedAt) {
  //     return (
  //       <div className="listing-info">
  //         <span className="updated-at"> Updated: {updatedAt}</span>
  //         <i title="Reload news" onClick={() => Listing.refresh()} className="fas fa-sync-alt" />
  //       </div>
  //     )
  //   }
  // }

  render() {
    const { all: { data }, api } = this.props;
    const shouldRenderPlaceholders = api.request && !data.length;

    return (
      <div>
        <div className="listing">
          {shouldRenderPlaceholders ?
            Listing.renderPlaceholders() :
            Listing.renderItems(data)
          }
        </div>
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
