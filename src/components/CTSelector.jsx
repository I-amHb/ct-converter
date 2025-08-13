import React, { useState } from 'react'
import CurrencyConverter from './CurrencyConverter'
import TemperatureConverter from './TemperatureConverter'

const CTSelector = () => {

    const [activeConverter, setActiveConverter] = useState('currency');


    return (
        <>
            <div className='w-full pb-mid lg:px-mid'>
                <div className='flex justify-center gap-4 p-mid
            lg:gap-8'>
                    <button className={`w-btnw h-btnh text-white hover:bg-secondaryHvr  bg-primary 
                border-transparent shadow-lg rounded-md transition-all duration-500
                ${activeConverter === 'currency'? 'bg-secondaryHvr' : 'bg-primary' } `}
                        onClick={() => setActiveConverter('currency')}>Currency</button>
                    <button className={`w-btnw h-btnh text-white hover:bg-secondaryHvr  bg-primary 
                border-transparent shadow-lg rounded-md transition-all duration-500
                ${activeConverter === 'temperature'? 'bg-secondaryHvr' : 'bg-primary' } `}
                        onClick={() => setActiveConverter('temperature')}>Temperature</button>
                </div>
                {activeConverter === 'currency' ? <CurrencyConverter /> : <TemperatureConverter />}
            </div>
        </>

    )
}
export default CTSelector