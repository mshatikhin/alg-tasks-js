const primes = num => {
  const numbers = new Array(num + 1);
  numbers.fill(true);

  numbers[0] = numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) numbers[i * j] = false;
  }

  return numbers.reduce((primes, isPrime, prime) => {
    return isPrime ? primes.concat(prime) : primes;
  }, []);
};

describe("Sieve of Eratosthenes", () => {
  it("Should return all prime numbers", () => {
    expect(primes(10)).toEqual([2, 3, 5, 7]);
  });
});
