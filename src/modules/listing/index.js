import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import newsState from 'redux/modules/news';

import Listing from './Listing';

const mapStateToProps = state => ({
  all: newsState.selectors.all(state),
  api: newsState.selectors.allApi(state),
});

const mapActionsToProps = dispatch =>
  bindActionCreators({
    getNews: newsState.actions.getNews,
  }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Listing);
