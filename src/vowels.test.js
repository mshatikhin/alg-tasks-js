const vowels = str => {
  let count = 0;
  const choises = "aeiou";

  for (let char of str.toLowerCase()) {
    if (choises.includes(char)) count++;
  }

  return count;
};

const vowels2 = str => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

describe("Vowels", () => {
  it("Should count vowels", () => {
    expect(vowels("hello world")).toBe(3);
    expect(vowels2("hello world")).toBe(3);
  });
});
