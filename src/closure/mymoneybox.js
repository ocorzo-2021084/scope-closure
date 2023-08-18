// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`My moneyBox $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(90);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(9);
myMoneyBox(8);
