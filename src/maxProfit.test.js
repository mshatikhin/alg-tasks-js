const maxProfit = prices => {
  let minBuyPrice = prices[0];
  let maxSellPrice = prices[0];

  let maxProfit = 0;

  for (let index = 1; index < prices.length; index++) {
    const sellPrice = prices[index];
    minBuyPrice = Math.min(minBuyPrice, sellPrice);
    const profit = sellPrice - minBuyPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
      maxSellPrice = sellPrice;
    }
  }

  return [minBuyPrice, maxSellPrice];
};

const maxProfit2 = prices => {
  let minBuyPrice = prices[0],
    maxSellPrice = prices[1];
  let maxProfit = maxSellPrice - minBuyPrice;
  let changeBuyPrice = false;

  prices.forEach((price, index) => {
    if (changeBuyPrice) minBuyPrice = price;
    const sellPrice = prices[index + 1];

    if (minBuyPrice > sellPrice) changeBuyPrice = true;
    else {
      changeBuyPrice = false;
      const profit = sellPrice - minBuyPrice;
      if (profit > maxProfit) (maxProfit = profit), (maxSellPrice = sellPrice);
    }
  });

  return [minBuyPrice, maxSellPrice];
};

describe("Max Profit", () => {
  it("Should return minimum buy price and maximum sell price", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual([1, 5]);
    expect(maxProfit([1, 3, 2, 5, 4])).toEqual([1, 5]);
  });

  it("Should return minimum buy price and maximum sell price 2", () => {
    expect(maxProfit2([1, 2, 3, 4, 5])).toEqual([1, 5]);
    expect(maxProfit2([1, 3, 2, 5, 4])).toEqual([1, 5]);
  });
});
