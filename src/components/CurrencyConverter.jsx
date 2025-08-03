import { useEffect, useState } from "react";

const CurrencyConverter = () => {

  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('NGN');
  const [conversionRates, setConversionRates] = useState({});

  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState('')

  const apiKey = "2409097c4750e42ff79ade63";
  const exchangeRateApiUrl = "https://v6.exchangerate-api.com/v6"

  useEffect(() => {

    fetch(`${exchangeRateApiUrl}/${apiKey}/latest/${baseCurrency}`)
      .then(res => res.json())
      .then(data => {
        setConversionRates(data.conversion_rates);
        setCurrencyList(Object.keys(data.conversion_rates));
        setExchangeRate(data.conversion_rates[targetCurrency]);
      })
      .catch(error => {
        console.error('Error fetching exchange rate', error)
      });

  }, [baseCurrency]);

  useEffect(() => {
    if (conversionRates && targetCurrency) {
      setExchangeRate(conversionRates[targetCurrency]);
    }
  }, [targetCurrency, conversionRates])

  useEffect(() => {
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate])

  return (
    <div>
      <h3>Currency Converter</h3>
      <label htmlFor="">
        Enter amount
        <input type="text"
          placeholder="e.g. 10"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))} />
      </label>

      <p>from </p><select name="exchangeRates"
        id="exchangeRates"
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}>
        {currencyList.map(currencyCode => (
          <option key={currencyCode} value={currencyCode}>
            {currencyCode}
          </option>
        )
        )}
      </select>

      <p>to </p><select name="exchangeRates"
        id="exchangeRates"
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}>
        {currencyList.map(currencyCode => (
          <option key={currencyCode} value={currencyCode}>
            {currencyCode}
          </option>
        )
        )}
      </select>
      {exchangeRate ?
        (<p>{baseCurrency} 1 = {targetCurrency} {exchangeRate}</p>
          && <p>{amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency} </p>
        ) :
        (<p>Loading exchange rate...</p>)}
    </div>


  )
}

export default CurrencyConverter