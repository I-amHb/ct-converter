import { useEffect, useState } from "react";
import CountryFacts from "./CountryFacts";
import ErrorBoundary from "./ErrorBoundary";

const CurrencyConverter = () => {

  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('NGN');
  const [conversionRates, setConversionRates] = useState({});

  const [amount, setAmount] = useState('0.00');
  const [convertedAmount, setConvertedAmount] = useState('')

  const apiKey = "2409097c4750e42ff79ade63";
  const exchangeRateApiUrl = "https://v6.exchangerate-api.com/v6"

  useEffect(() => {

    // fetch(`${exchangeRateApiUrl}/${apiKey}/latest/${baseCurrency}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setConversionRates(data.conversion_rates);
    //     setCurrencyList(Object.keys(data.conversion_rates));
    //     setExchangeRate(data.conversion_rates[targetCurrency]);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching exchange rate', error)
    //   });

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
    <>
      <div className="w-full bg-white py-mid  rounded-t-[0.6rem] border-primary border-t-[9px] mx-small shadow-md
         ">
        <div className="px-mid flex flex-col items-center gap-[30px]">
          <label className="flex flex-col ">Amount
            <input type="text"
              placeholder="e.g. 10"
              value={amount}
              className="border w-[250px] h-input rounded-radius px-[5px] "
              onChange={(e) => setAmount(Number(e.target.value))} />
          </label>
          <div className="flex flex-col ">
            <p>from </p>
            <select name="exchangeRates"
              id="exchangeRates"
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
              className="border w-[250px] h-input rounded-radius "
            >
              <option value="" disabled selected hidden >Currency Code</option>
              {currencyList.map(currencyCode => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode}
                </option>
              )
              )}
            </select>
          </div>

          <div className="flex flex-col" >
            <p>to </p>
            <select name="exchangeRates"
              id="exchangeRates"
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              className="border w-[250px] h-input rounded-radius "
            >
              <option value="" disabled selected hidden >Currency Code</option>
              {currencyList.map(currencyCode => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode}
                </option>
              )
              )}
            </select>
          </div>

          {exchangeRate ?
            (<p>{baseCurrency} 1 = {targetCurrency} {exchangeRate}</p>
              && <p>Exchange Rate: {convertedAmount.toFixed(2)} {targetCurrency} </p>
            ) :
            (<p>Loading exchange rate...</p>)}
        </div>
        <ErrorBoundary fallback="There was an error">
          <CountryFacts baseCurrency={baseCurrency} />
        </ErrorBoundary>

      </div>

    </>



  )
}
export default CurrencyConverter