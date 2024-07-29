const reversePrimes = (n) => {
  const primes = [];
  let i = 2;

  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }

  return primes.reverse();
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(reversePrimes(5)); // outputs: [11, 7, 5, 3, 2]
