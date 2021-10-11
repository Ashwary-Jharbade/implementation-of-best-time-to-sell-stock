/**
 * @description: Function checks if passed argument is valid array or not
 * @argument: Function accepts argument of type "Array" Object
 * @returns: Function return value of type "boolean"
 * */ 
const isValidArray = (arr) => {
  if (arr && arr.constructor.name === "Array") {
    return true;
  }
  return false;
};

/**
 * @description: Function checks if passed array is empty or not
 * @argument: Function accepts argument of type "Array" Object
 * @returns: Function return value of type "boolean"
 * */ 
const isEmpty = (arr) => {
  if (!arr.length) {
    return false;
  }
  for (const iterator of arr) {
    if (iterator === undefined) return false;
  }
  return true;
};

/**
 * @description: Function calculate the day when the stock price in minimum
 * @argument: Function accepst argument of type "Array" Object
 * @returns: Function return value of type "Object" with min stock price and respective day.
 * */ 
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

/**
 * @description: Function calcuate the max profit between the stock buting and selling dates 
 * @argument: Function accepst argument of type "Array" Object
 * @returns: Function return value of type "Number"
 * */ 
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

// Initializing an array with stock prices
const prices = [7,1,5,3,6,4,6];

// Calling maxProfit function with array as a parameter and logging the returned result
console.log(maxProfit(prices));
