module.exports = {
  /**
   * @param {String} name
   * @param {Partial<Number>} spacing
   */
  gen_logger(name, spacing = 0) {
    return (...args) => console.log(" ".repeat(spacing), `[${name}]:`, ...args);
  },
};
