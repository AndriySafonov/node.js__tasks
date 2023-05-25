const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const myDateTime = function () {
  return Date();
};

module.exports = {
  add: add,
  minus: minus,
  myDateTime: myDateTime,
};
