import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from './Item';

import newsState from 'redux/modules/news';

const mapStateToProps = state => ({
  all: newsState.selectors.all(state),
  api: newsState.selectors.allApi(state),
});

const mapActionsToProps = dispatch =>
  bindActionCreators({
    getNews: newsState.actions.getNews,
  }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Item);
