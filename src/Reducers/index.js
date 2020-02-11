import {combineReducers} from 'redux';
import Reflections from './Reflections';

const appReducer = combineReducers({Reflections});

const index = (state, action) => appReducer(state, action);

export default index;
