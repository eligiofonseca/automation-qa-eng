const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    if (today === "Friday") {
      return "TGIF";
    } else {
      return "Nope";
    }
  }

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Given('today is Friday', function () {
  this.today = 'Friday';
});



// Feature: Is it Friday yet?
//   Everybody wants to know when it's Friday

//   Scenario Outline: Today is or is not Friday
//     Given today is "<day>"
//     When I ask whether it's Friday yet
//     Then I should be told "<answer>"

//   Examples:
//     | day            | answer |
//     | Friday         | TGIF   |
//     | Sunday         | Nope   |
//     | anything else! | Nope   |


// const assert = require('assert');
// const { Given, When, Then } = require('@cucumber/cucumber');

// function isItFriday(today) {
//   if (today === "Friday") {
//     return "TGIF";
//   } else {
//     return "Nope";
//   }
// }

// Given('today is {string}', function (givenDay) {
//   this.today = givenDay;
// });

// When('I ask whether it\'s Friday yet', function () {
//   this.actualAnswer = isItFriday(this.today);
// });

// Then('I should be told {string}', function (expectedAnswer) {
//   assert.strictEqual(this.actualAnswer, expectedAnswer);
// });