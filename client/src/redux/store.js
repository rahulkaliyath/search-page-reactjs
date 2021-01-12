import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';


const middleWares =[logger,thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;