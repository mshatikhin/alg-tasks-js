const fizzBuzz = number => {
  let output = [];
  for (let i = 1; i <= number; i++) {
    if (i % 6 === 0) output.push("Fizz Buzz");
    else if (i % 2 === 0) output.push("Fizz");
    else if (i % 3 === 0) output.push("Buzz");
    else output.push(i);
  }
  return output;
};

let output;

describe("Fizz Buzz", () => {
  beforeEach(() => (output = fizzBuzz(30)));
  it("Should output number", () => {
    expect(output[0]).toBe(1);
  });
  it("Should output Fizz", () => {
    expect(output[1]).toBe("Fizz");
  });
  it("Should output Buzz", () => {
    expect(output[2]).toBe("Buzz");
  });
  it("Should output Fizz Buzz", () => {
    expect(output[5]).toBe("Fizz Buzz");
  });
});
