const reverseArray = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

const reverseArray2 = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
};

describe("Reverse Arrays", () => {
  it("Should reverse arrays", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it("Should reverse arrays 2", () => {
    expect(reverseArray2([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reverseArray2([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});
