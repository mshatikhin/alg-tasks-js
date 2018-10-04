const reverse = num => {
  return (
    parseInt(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(num)
  );
};

describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
    expect(reverse(1234)).toBe(4321);
    expect(reverse(-1200)).toBe(-21);
  });
});
