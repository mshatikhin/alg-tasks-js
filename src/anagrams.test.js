const charCount = str => {
  const table = {};
  for (let char of str.replace(/\W/g, "").toLowerCase()) {
    table[char] = table[char] + 1 || 1;
  }

  return table;
};

const anagrams = (strA, strB) => {
  const charCountA = charCount(strA);
  const charCountB = charCount(strB);

  if (Object.keys(charCountA).length !== Object.keys(charCountB).length) {
    return false;
  }

  for (let char in charCountA)
    if (charCountA[char] !== charCountB[char]) return false;

  return true;
};

const sort = str =>
  str
    .replace(/\W/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

const anagrams2 = (strA, strB) => {
  return sort(strA) === sort(strB);
};

describe("Anagrams", () => {
  it("Should implement anagrams", () => {
    expect(anagrams("hello world", "world hello")).toBeTruthy();
    expect(anagrams("hellow world", "hello there")).toBeFalsy();
    expect(anagrams("hellow world", "hello there!")).toBeFalsy();

    expect(anagrams2("hello world", "world hello")).toBeTruthy();
    expect(anagrams2("hellow world", "hello there")).toBeFalsy();
    expect(anagrams2("hellow world", "hello there!")).toBeFalsy();
  });
});
