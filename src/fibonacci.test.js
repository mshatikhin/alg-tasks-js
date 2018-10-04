const fibonacci = num => {
  return num < 3 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
};

const fibonacci2 = num => {
  const series = [1, 1];

  for (let i = 2; i < num; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }

  return series[num - 1];
};

describe("Fibonacci", () => {
  it("Should implement fibonacci", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci2(16)).toBe(987);
  });
});
