'use strict';

function scoreCalculator(arr) {
  // do work here
  let score = 0;

  if (arr.length === 0) {
    score = -1;
  }

  arr.forEach((elem) => {
    if (elem < 5 && elem > 0) {
      score += 10;
    } else if (elem >= 5 && elem <= 10) {
      score += 5;
    }

    if (arr.every((elem) => elem < 5)) {
      score += 100;
    }
  });

  return score;
}

module.exports = scoreCalculator;