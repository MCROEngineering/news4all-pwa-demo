import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from './Item';

const mapStateToProps = state => ({
  // apiStatus: rfpState.selectors.currentApi(state),
  // currentRFP: rfpState.selectors.currentRFP(state),
  // updateRFPApi: rfpState.selectors.updateApi(state),
});

const mapActionsToProps = dispatch =>
  bindActionCreators({
    // getOneRFP: rfpState.actions.getOne,
    // removeRFP: rfpState.actions.removeOne,
  }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Item);
