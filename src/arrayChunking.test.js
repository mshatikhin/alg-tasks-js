const chunk = (arr, size) => {
  const chunks = [];

  for (let item of arr) {
    const lastChunk = chunks[chunks.length - 1];
    if (!lastChunk || lastChunk.length === size) chunks.push([item]);
    else lastChunk.push(item);
  }

  return chunks;
};

const chunk2 = (array, size) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }

  return chunks;
};

const chunk3 = (array, size) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
};

describe("Array Chunking", () => {
  it("Should implement array chunking", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });

  it("Should implement array chunking2", () => {
    expect(chunk2([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk2([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk2([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });

  it("Should implement array chunking3", () => {
    expect(chunk3([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk3([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk3([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });
});
