const caesarCipher = (str, num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const input = str.toLowerCase();
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (alphabet.indexOf(letter) === -1) {
      output += letter;
      continue;
    }

    let index = alphabet.indexOf(letter) + (num % 26);
    if (index > 25) index -= 26;
    if (index < 0) index += 26;

    output +=
      str[i] === str[i].toUpperCase()
        ? alphabet[index].toUpperCase()
        : alphabet[index];
  }

  return output;
};

describe("Caesar Cipher", () => {
  it("Should shift to the right", () => {
    expect(caesarCipher("I love JavaScript!", 100)).toBe("E hkra FwrwOynelp!");
  });
  it("Should shift to the left", () => {
    expect(caesarCipher("I love JavaScript!", -100)).toBe("M pszi NezeWgvmtx!");
  });
});
