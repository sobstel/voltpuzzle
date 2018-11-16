import { createLogic } from 'redux-logic';

export default logics => {
  return Object.keys(logics).map(name => createLogic({ type: name, process: logics[name] }));
};
