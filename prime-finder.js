'use strict';

module.exports = function(n) {
  let prime = [2];
  for (let i = 3; prime.length < n; i += 2) {
    let isPrime = true;
    for (let j = 0; j < prime.length && prime[j] * prime[j] <= i; j++) {
      if (i % prime[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      prime.push(i);
    }
  }
  return prime.pop();
};
