const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
    }
  }
  return array;
};

describe("Insertion Sort", () => {
  it("Should implement insertion sort", () => {
    expect(insertionSort([4, 3, 3, 2, 1])).toEqual([1, 2, 3, 3, 4]);
    expect(insertionSort([4, 3, 1, 2, 3])).toEqual([1, 2, 3, 3, 4]);
  });
});
