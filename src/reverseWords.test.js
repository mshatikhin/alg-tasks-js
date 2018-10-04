const reverseWords = str => {
  const wordsReversed = [];

  str.split(" ").forEach(word => {
    let wordReversed = "";
    for (let i = word.length - 1; i >= 0; i--) wordReversed += word[i];
    wordsReversed.push(wordReversed);
  });

  return wordsReversed.join(" ");
};

describe("Reverse Words", () => {
  it("Should reverse words", () => {
    expect(reverseWords("I love JavaScript!")).toBe("I evol !tpircSavaJ");
  });
});
