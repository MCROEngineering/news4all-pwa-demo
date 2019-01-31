import { connect } from 'react-redux';

import newsState from 'redux/modules/news';

import Navbar from './Navbar';

const mapStateToProps = state => ({
  updatedAt: newsState.selectors.updatedAt(state),
});

export default connect(mapStateToProps)(Navbar);
