const max = str => {
  const chars = {};

  for (let char of str) chars[char] = chars[char] + 1 || 1;

  let maxCount = 0;
  let maxCharacter = null;

  for (let char in chars) {
    if (chars[char] > maxCount) {
      maxCount = chars[char];
      maxCharacter = char;
    }
  }

  return maxCharacter;
};

describe("Max Character", () => {
  it("Should return max character", () => {
    expect(max("Hello World!")).toBe("l");
  });
});
