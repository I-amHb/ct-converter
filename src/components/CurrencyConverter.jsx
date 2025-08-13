import { useEffect, useState } from "react";

const CurrencyConverter = () => {

  const [selectedBaseCountry, setSelectedBaseCountry] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('');
  const [selectedTargetCountry, setSelectedTargetCountry] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0.00)
  const [baseCountryDetails, setBaseCountryDetails] = useState()
  const [targetCountryDetails, setTargetCountryDetails] = useState()

  const apiKey = "2409097c4750e42ff79ade63";
  const exchangeRateApiUrl = "https://v6.exchangerate-api.com/v6"

  const restCountryApi = "https://restcountries.com/v3.1/all?fields=name,currencies,flags,maps,capital,population";

  useEffect(() => {
    fetch(restCountryApi)
      .then(res => res.json())
      .then(data => {
        const countries = data.map((val) => {
          const currencyCode = val.currencies ? Object.keys(val.currencies)[0] : null;
          return {
            name: val.name.common,
            currencyCode: currencyCode
          };
        })

        const soretedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));

        setCurrencyList(soretedCountries);
      })
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    if (!selectedBaseCountry) return;

    fetch(`https://restcountries.com/v3.1/name/${selectedBaseCountry}?fields=name,currencies,flags,maps,capital,population`)
      .then(res => res.json())
      .then(data => {
        setBaseCountryDetails(data[0]);
        console.log(baseCountryDetails);
      })
  }, [selectedBaseCountry])


  useEffect(() => {
    if (!baseCurrency || !targetCurrency) return;
    fetch(`${exchangeRateApiUrl}/${apiKey}/latest/${baseCurrency}`)
      .then(res => res.json())
      .then(data => {
        setExchangeRate(data.conversion_rates[targetCurrency]);

      })
      .catch(error => {
        console.error('Error fetching exchange rate', error)
      });

  }, [baseCurrency, targetCurrency]);



  useEffect(() => {
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate])

  return (
    <>
      <div className="w-full flex  flex-col justify-center bg-white py-mid  rounded-[0.6rem] 
      border-primary border-t-[9px] mx-small shadow-md lg:flex-row ">
        <div className="px-mid flex flex-col items-center gap-[30px] max-w-full border">
          <div className="flex flex-col items-center gap-[30px] border w-full min-w-[220px] max-w-[500px] ">
            <h1 className='font-bold text-sm text-center text-primary'>Currency Converter</h1>
            <div className="flex flex-col w-full min-w-[220px] max-w-[400px] lg:max-w-[400px]">
              <p>Amount</p>
              <input
                type="text"
                placeholder="e.g. 10"
                value={amount}
                className="border h-input rounded-radius px-[5px] w-full"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col w-full min-w-[220px] max-w-[400px] lg:max-w-[400px]">
              <p>from </p>
              <select
                name="exchangeRates"
                id="exchangeRates"
                value={selectedBaseCountry}
                onChange={(e) => {
                  setSelectedBaseCountry(e.target.value);
                  const country = currencyList.find(c => c.name === e.target.value);
                  setBaseCurrency(country?.currencyCode || '');
                }}
                className="border w-full h-input rounded-radius"
              >
                <option value="" disabled selected hidden>Currency Code</option>
                {currencyList.map(country => (
                  <option key={country.name} value={country.name}>
                    {country.name} ({country.currencyCode})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full min-w-[220px] max-w-[400px] lg:max-w-[400px]">
              <p>to </p>
              <select
                name="exchangeRates"
                id="exchangeRates"
                value={selectedTargetCountry}
                onChange={(e) => {
                  setSelectedTargetCountry(e.target.value);
                  const country = currencyList.find(c => c.name === e.target.value);
                  setTargetCurrency(country?.currencyCode || '');
                }}
                className="border w-full h-input rounded-radius"
              >
                <option value="" disabled selected hidden>Currency Code</option>
                {currencyList.map(country => (
                  <option key={country.name} value={country.name}>
                    {country.name} ({country.currencyCode})
                  </option>
                ))}
              </select>
            </div>
            {exchangeRate ? (
              <>
                <p>{baseCurrency} 1 = {targetCurrency} {exchangeRate}</p>
              </>

            ) :
              (baseCurrency && targetCurrency && amount > 0 && <p>Loading exchange rate...</p>)}
            <p>Converted Amount: {convertedAmount.toFixed(2)} {targetCurrency} </p>
          </div>

        </div>
        <div className={`${!baseCountryDetails? 'hidden':'flex'} px-mid  flex-col items-center gap-[30px] max-w-full border`}>
          <div className="flex flex-col items-center gap-[30px] border w-full min-w-[220px] max-w-[500px] h-full ">
            {baseCountryDetails && (
              <div className="flex flex-col w-full min-w-[220px] max-w-[400px] lg:max-w-[400px]">
                <div>
                  <p>Name: {baseCountryDetails?.name?.common}</p>
                  <p>Capital: {baseCountryDetails?.capital}</p>
                </div>
                <div>
                  <img src={baseCountryDetails?.flags?.png} alt={`${baseCountryDetails.name.common} national flag`}
                    className="w-[24px]" />
                </div>
                <div>
                  <p>Pop: {baseCountryDetails?.population}</p>
                </div>
                <div>
                  <a href={baseCountryDetails?.maps?.googleMaps}>Map Link</a>
                </div>


              </div>
            )}
          </div>


        </div>

      </div>


    </>

  )
}
export default CurrencyConverter