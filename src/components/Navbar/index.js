import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import newsState from 'redux/modules/news';

import Navbar from './Navbar';

const mapStateToProps = state => ({
  updatedAt: newsState.selectors.updatedAt(state),
});

const mapActionsToProps = dispatch =>
  bindActionCreators({
    // getNews: newsState.actions.getNews,
  }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
