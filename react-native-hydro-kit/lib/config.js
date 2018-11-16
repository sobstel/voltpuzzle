let configHandler = {
  get(target, name) {
    if (!(name in target)) {
      throw Error(`Missing config var: ${name}`);
    }
    return target[name];
  },
  set(target, name, value) {
    target[name] = value;
  },
};

export default new Proxy({}, configHandler);
