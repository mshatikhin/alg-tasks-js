const isPalindrome1 = str => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  const stringCharacters = str
    .toLowerCase()
    .split("")
    .reduce(
      (chars, char) =>
        validCharacters.indexOf(char) > -1 ? chars.concat(char) : chars,
      []
    );

  return stringCharacters.join("") === stringCharacters.reverse("").join("");
};

const isPalindrome2 = str => {
  return str
    .split("")
    .every((char, index) => char === str[str.length - 1 - index]);
};

const isPalindrome3 = str => {
  const cleaned = str.replace(/|W/g, "").toLowerCase();
  return (
    cleaned ===
    cleaned
      .split("")
      .reverse()
      .join("")
  );
};

describe("Palindrome", () => {
  it("Should return true", () => {
    expect(
      isPalindrome1("Cigar? Toss it in a can. It is so tragic")
    ).toBeTruthy();
  });
  it("Should return false", () => {
    expect(isPalindrome1("sit ad est love")).toBeFalsy();
  });

  it("Should return true 2", () => {
    expect(isPalindrome2("kazak")).toBeTruthy();
  });

  it("Should return false 2", () => {
    expect(isPalindrome2("sit ad est love")).toBeFalsy();
  });

  it("Should return true 3", () => {
    expect(isPalindrome3("kazak")).toBeTruthy();
  });

  it("Should return false 3", () => {
    expect(isPalindrome3("sit ad est love")).toBeFalsy();
  });
});
