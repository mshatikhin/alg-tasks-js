class Stats {
  constructor(array) {
    this.array = array;
  }

  static round(value, round = 2) {
    return Math.round(value * Math.pow(10, round)) / Math.pow(10, round);
  }

  mean() {
    return (
      this.array.reduce((sum, value) => sum + value, 0) / this.array.length
    );
  }

  median() {
    const arraySorted = this.array.sort();
    return arraySorted.length % 2 === 0
      ? (arraySorted[arraySorted.length / 2 - 1] +
          arraySorted[arraySorted.length / 2]) /
          2
      : arraySorted[Math.floor(arraySorted.length / 2)];
  }

  mode() {
    const table = {};
    this.array.forEach(value => (table[value] = table[value] + 1 || 1));

    let modes = [];
    let max = 0;
    for (const key in table) {
      const value = parseFloat(key);
      const count = table[key];
      if (count > max) {
        modes = [value];
        max = count;
      } else if (count === max) modes.push(value);
    }

    if (modes.length === Object.keys(table).length) modes = [];
    return modes;
  }
}

const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);

describe("Mean", () => {
  it("Should implement mean", () => {
    expect(Stats.round(stat1.mean())).toBe(3.43);
    expect(Stats.round(stat2.mean())).toBe(2.5);
  });
});
describe("Median", () => {
  it("Should implement median", () => {
    expect(stat1.median()).toBe(4);
    expect(stat2.median()).toBe(2.5);
  });
});
describe("Mode", () => {
  it("Should implement mode", () => {
    expect(stat1.mode()).toEqual([4, 5]);
    expect(stat2.mode()).toEqual([]);
  });
});
