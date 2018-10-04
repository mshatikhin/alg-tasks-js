const reverse1 = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const reverse2 = str => {
  let result = "";
  for (let character of str) result = character + result;
  return result;
};

const reverse3 = str => {
  return str.split("").reduce((res, char) => char + res);
};

describe("String Reversal", () => {
  it("Should reverse string", () => {
    expect(reverse1("Hello World!")).toBe("!dlroW olleH");
    expect(reverse2("Hello World!")).toBe("!dlroW olleH");
    expect(reverse3("Hello World!")).toBe("!dlroW olleH");
  });
});
