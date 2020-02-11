import {connect} from 'react-redux';
import Home from './Component';
import {getReflections} from '../../Actions';

const mapStateToProps = state => {
  return {
    Reflections: state.Reflections
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getReflections: () => dispatch(getReflections())
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
