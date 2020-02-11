import {connect} from 'react-redux';
import Home from './Component';
import {updateReflection, getReflections} from '../../Actions';

const mapStateToProps = state => {
  return {
    pendingReflectionList: state.Reflections.pendingReflectionList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateReflection: (reflectionId, payload) =>
      dispatch(updateReflection(reflectionId, payload)),
    getReflections: () => dispatch(getReflections())
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
