const person = require('./person.json');
const uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: person,
  random: uniqueRandomArray(person),
  length: person.length,
};
