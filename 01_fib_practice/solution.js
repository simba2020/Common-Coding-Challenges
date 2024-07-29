const reverseFibonacci = (n) => {
  if (n < 1) return [];

  // Initialize the first two numbers of the sequence
  let sequence = [0, 1];

  // Calculate the rest of the sequence up to n
  while (true) {
    const nextValue =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextValue > n) break;
    sequence.push(nextValue);
  }

  // Reverse and return the sequence
  return sequence.reverse();
};

// Call the function and print the result
console.log(reverseFibonacci(5).join(", "));
