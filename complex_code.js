/*
Filename: complex_code.js
Description: This code demonstrates a complex algorithm for calculating the prime numbers up to a given number using the Sieve of Eratosthenes method.
*/

// Function to find prime numbers up to a given number
function findPrimes(n) {
  // Using the Sieve of Eratosthenes algorithm
  let primes = [];
  let isPrime = Array(n + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primes.push(i);
  }

  return primes;
}

// Function to print the prime numbers
function printPrimes(primes) {
  console.log("Prime Numbers:");
  console.log(primes.join(", "));
}

// Get user input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number: ', (number) => {
  const n = parseInt(number);

  // Validate input
  if (isNaN(n) || n < 2) {
    console.log("Invalid input! Please enter a positive integer greater than 1.");
    readline.close();
    return;
  }

  // Find and print prime numbers
  const primes = findPrimes(n);
  printPrimes(primes);

  readline.close();
});
