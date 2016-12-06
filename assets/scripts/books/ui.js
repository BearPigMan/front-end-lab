'use strict';

const booksBars = require('./templates/books.handlebars');

const failure = function(error) {
  console.log(error);
};

const success = function(data) {
  $('p').html(booksBars(data));
};

module.exports = {
  failure,
  success
};
