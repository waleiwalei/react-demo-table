import { connect } from 'react-redux'
import { setVisibilityFilter } from '../action'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  // console.log(state.visibilityFilter);
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)