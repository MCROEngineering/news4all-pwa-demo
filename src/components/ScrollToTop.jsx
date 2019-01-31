import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location: currentLocation } = this.props;
    const { location: prevLocation } = prevProps;

    if (currentLocation !== prevLocation) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(ScrollToTop);
