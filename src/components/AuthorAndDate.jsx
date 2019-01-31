import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

const AuthorAndDate = ({ author, publishedAt }) => {
  const publishDate = moment(publishedAt).fromNow();

  return (
    <div className="author-and-date">
      <div>{author && `by ${author}`}</div>
      {author && <span>|</span>}
      <div className="date">
        <i className="far fa-calendar" />
        {publishDate}
      </div>
    </div>
  );
};

AuthorAndDate.propTypes = {
  author: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  publishedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AuthorAndDate.defaultProps = {
  author: '',
  publishedAt: '',
};

export default AuthorAndDate;
