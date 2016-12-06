'use strict';

const failure = function(error) {
  console.log(failure);
};

const success = function(data) {
  console.log(data);
};

module.exports = {
  failure,
  success
};
