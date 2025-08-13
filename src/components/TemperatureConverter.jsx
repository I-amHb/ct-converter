import React, { useEffect, useState } from 'react'

const TemperatureConverter = () => {

  const [amount, SetAmount] = useState(0);
  const [baseUnit, setBaseUnit] = useState('°C');
  const [targetUnit, setTargetUnit] = useState('°F');
  const [convertedAmount, setConvertedAmount] = useState('');


  useEffect(() => {
    if (amount === '' || isNaN(amount)) return;

    if (baseUnit === targetUnit) {
      setConvertedAmount(amount);
    } else if (baseUnit === '°C' && targetUnit === '°F') {
      setConvertedAmount((1.8 * amount) + 32);
    } else if (baseUnit === '°F' && targetUnit === '°C') {
      setConvertedAmount((5 / 9) * (amount - 32));
    }


  }, [baseUnit, targetUnit, amount]);


  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-mid rounded-[0.6rem] 
      border-primary border-t-[9px] mx-small shadow-md lg:flex-row'>
      <div className='px-mid flex flex-col gap-[30px] w-full min-w-[220px] max-w-[500px]'>
        <div className="flex flex-col items-center gap-[30px] w-full min-w-[220px] max-w-[500px]" >
          <h1 className='font-bold text-sm text-center text-primary'>Temperature Converter</h1>
          <div className='flex flex-col w-full min-w-[220px] max-w-[400px] lg:max-w-[400px]'>
            <p>Amount</p>
            <input type="text"
              value={amount}
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(value)) SetAmount(Number(value));
              }}
              className='border h-input rounded-radius px-[5px] w-full' />
          </div>
          <div className='flex flex-col w-full min-w-[220px] max-w-[400px] lg:max-w-[400px] border-t pt-small'>
            <p>from</p>
            <select name="baseunit" id="baseunit"
              className='border w-full h-input rounded-radius'
              value={baseUnit}
              onChange={(e) => setBaseUnit(e.target.value)}>
              <option value="°C">Celcius (°C)</option>
              <option value="°F">Fahrenheit (°F)</option>
            </select>
          </div>
          <div className='flex flex-col w-full min-w-[220px] max-w-[400px] lg:max-w-[400px] border-t pt-small'>
            <p>to</p>
            <select name="targetunit" id="targetunit"
              className='border w-full h-input rounded-radius'
              value={targetUnit}
              onChange={(e) => setTargetUnit(e.target.value)}>
              <option value="°C">Celcius (°C)</option>
              <option value="°F">Fahrenheit (°F)</option>
            </select>
          </div>

          <div>
            {amount && convertedAmount !== ''
              ? `${amount} ${baseUnit} = ${convertedAmount.toFixed(2)} ${targetUnit}` :
              ""}
          </div>
        </div>



      </div>
    </div>
  )
}
export default TemperatureConverter