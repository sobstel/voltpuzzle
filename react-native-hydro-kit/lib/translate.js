import $ from './config';

const script = $.script;

export default (id, opts = {}) => {
  if (script[id]) {
    if (typeof script[id] === 'string') {
      return script[id].trim();
    }

    return script[id];
  }

  return id;
};
