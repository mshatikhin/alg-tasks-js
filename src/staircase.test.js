const steps = num => {
  let stairs = "";

  for (let row = 0; row < num; row++) {
    let stair = "";

    for (let column = 0; column < num; column++)
      stair += column <= row ? "#" : " ";

    stairs += stair + "\n";
  }

  return stairs;
};

const steps2 = (num, row = 0, stair = "", stairs = "") => {
  if (row === num) return stairs;

  if (stair.length === num)
    return steps2(num, row + 1, "", stairs + stair + "\n");

  return steps2(num, row, stair + (stair.length <= row ? "#" : " "), stairs);
};

describe("Steps", () => {
  it("Should print steps", () => {
    expect(steps(3)).toBe("#  \n## \n###\n");
    expect(steps2(3)).toBe("#  \n## \n###\n");
  });
});
