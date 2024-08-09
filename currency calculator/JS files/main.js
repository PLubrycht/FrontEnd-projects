const btn = document.querySelector("#calculateButton");
const input = document.querySelector("#enterValue");
const listOfCurrencies = document.querySelector("#currenciesList");
const calculatedValue = document.querySelector("#calculatedValue");

const currencyCalculator = () => {
  fetch("http://api.nbp.pl/api/exchangerates/tables/a")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].rates);
    });
};

btn.addEventListener("click", currencyCalculator);
