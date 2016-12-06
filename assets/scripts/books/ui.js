'use strict';

const failure = function(error) {
  console.log(error);
};

const success = function(data) {
  console.log(data);
};

module.exports = {
  failure,
  success
};
