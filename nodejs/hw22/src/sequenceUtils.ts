export const generateFibonacci = (limit: number): number[] => {
  const sequence: number[] = [0, 1];

  while (sequence[sequence.length - 1] <= limit) {
    const nextNum =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextNum > limit) break;
    sequence.push(nextNum);
  }

  return sequence;
};

export const generatePrimeNumbers = (limit: number): number[] => {
  const primes: number[] = [];

  outer: for (let num = 2; num <= limit; num++) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) continue outer;
    }
    primes.push(num);
  }

  return primes;
};
