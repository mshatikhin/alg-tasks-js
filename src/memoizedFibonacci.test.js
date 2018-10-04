const _memoize = fn => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];

    const output = fn.apply(this, args);
    cache[args] = output;
    return output;
  };
};

const fibonacci = (element, cache = []) => {
  if (cache[element]) return cache[element];
  else {
    if (element < 3) return 1;
    else
      cache[element] =
        fibonacci(element - 1, cache) + fibonacci(element - 2, cache);
  }
  return cache[element];
};

const fibonacci2 = element =>
  element < 2
    ? element
    : memoized_fibonacci2(element - 1) + memoized_fibonacci2(element - 2);
const memoized_fibonacci2 = _memoize(fibonacci2);

describe("Memoized Fibonacci", () => {
  it("Should implement memoized fibonacci", () => {
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci2(10)).toBe(55);
  });
});
