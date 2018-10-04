const capitalize = str => {
  const words = [];

  for (let word of str.split(" "))
    words.push(word[0].toUpperCase() + word.slice(1));

  return words.join(" ");
};

const capitalize2 = str => {
  let title = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++)
    title += str[i - 1] === " " ? str[i].toUpperCase() : str[i];

  return title;
};

describe("Capitalization", () => {
  it("Should capitalize phrase", () => {
    expect(capitalize("hello world")).toBe("Hello World");
    expect(capitalize2("hello world")).toBe("Hello World");
  });
});
