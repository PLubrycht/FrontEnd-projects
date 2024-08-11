const btn = document.querySelector("#calculateButton");
const input = document.querySelector("#enterValue");
const listOfCurrencies = document.querySelector("#currenciesList");
let currencyRate = {};
let calculatedValue = document.querySelector("#calculatedValue");

const fetchingData = () => {
  fetch("http://api.nbp.pl/api/exchangerates/tables/a")
    .then((response) => response.json())
    .then((data) => {
      const neededCurrencies = [
        data[0].rates[1],
        data[0].rates[7],
        data[0].rates[9],
      ];
      neededCurrencies.forEach((neededCurrency) => {
        const option = document.createElement("option");
        option.textContent = neededCurrency.code;
        option.value = neededCurrency.mid;
        listOfCurrencies.appendChild(option);
        const calculation = () => {
          calculatedValue.textContent =
            input.value * listOfCurrencies.value + " PLN";
        };
        btn.addEventListener("click", calculation);
      });
      console.log(neededCurrencies);
    });
};
fetchingData();
