const isValidArray = (arr) => {
  if (arr && arr.constructor.name === "Array") {
    return true;
  }
  return false;
};

const isEmpty = (arr) => {
  if (!arr.length) {
    return false;
  }
  for (const iterator of arr) {
    if (iterator === undefined) return false;
  }
  return true;
};

const minStockPrice = (para) => {
  let def = 10001;
  let index = -1;
  para.forEach((item, i) => {
    if (item < def) {
      def = item;
      index = i;
    }
  });
  return { value: def, index };
};

const maxProfit = (prices) => {
  if (!isValidArray(prices) && isEmpty(prices)) {
    return "Passsed argument is not a valid array!";
  }
  const length = prices.length - 1;
  const suggestedBuyDate = minStockPrice(prices);
  if (suggestedBuyDate.index === length) return 0;
  let def = 0;
  let bestStockSellingDay = 0;
  for (let i = suggestedBuyDate.index + 1; i <= length; i++) {
    let priceComparison = prices[i] - suggestedBuyDate.value;
    if (priceComparison > def) {
      def = priceComparison;
      bestStockSellingDay = i;
    }
  }
  return prices[bestStockSellingDay] - suggestedBuyDate.value;
};

const prices = [7,1,5,3,6,4,6];
console.log(maxProfit(prices));
