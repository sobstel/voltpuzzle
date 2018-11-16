import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import chakra, { logic as chakraLogic } from './ducks/chakra';

const reducers = combineReducers({ chakra });
const logicMiddleware = createLogicMiddleware([...chakraLogic]);

export default createStore(reducers, applyMiddleware(logicMiddleware));
