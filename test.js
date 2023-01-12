const newspaperDailyPrices = {
  TOI: {
    Monday: 3,
    Tuesday: 3,
    Wednesday: 3,
    Thursday: 3,
    Friday: 3,
    Saturday: 5,
    Sunday: 6,
  },
  Hindu: {
    Monday: 2.5,
    Tuesday: 2.5,
    Wednesday: 2.5,
    Thursday: 2.5,
    Friday: 2.5,
    Saturday: 4,
    Sunday: 4,
  },
  ET: {
    Monday: 4,
    Tuesday: 4,
    Wednesday: 4,
    Thursday: 4,
    Friday: 4,
    Saturday: 4,
    Sunday: 10,
  },
  BM: {
    Monday: 1.5,
    Tuesday: 1.5,
    Wednesday: 1.5,
    Thursday: 1.5,
    Friday: 1.5,
    Saturday: 1.5,
    Sunday: 1.5,
  },
  HT: {
    Monday: 2,
    Tuesday: 2,
    Wednesday: 2,
    Thursday: 2,
    Friday: 2,
    Saturday: 4,
    Sunday: 4,
  },
};

function calculateWeeklySubscriptionExpenses(budget) {
  const possibleCombinations = [];
  for (const newspaper1 of Object.keys(newspaperDailyPrices)) {
    for (const newspaper2 of Object.keys(newspaperDailyPrices)) {
      const Total =
        Object.values(newspaperDailyPrices[newspaper1]).reduce(
          (sum, price) => sum + price,
          0
        ) +
        Object.values(newspaperDailyPrices[newspaper2]).reduce(
          (sum, price) => sum + price,
          0
        );
      if (Total <= budget && newspaper1 !== newspaper2) {
        possibleCombinations.push([newspaper1, newspaper2]);
      }
    }
  }

  return possibleCombinations;
}
console.log("Enter weekly budget/amount:");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
rl.on("line", function (line) {
  console.log(calculateWeeklySubscriptionExpenses(line));
});