import React from 'react'

const CTSelector = () => {
    return (
        <div className='w-full py-mid'>
            <p className='font-bold text-center text-primary'>Select Converter</p>
            <div className='flex justify-center gap-4 p-mid
            lg:gap-8'>
                <button href='#' className='w-btnw h-btnh text-white hover:bg-secondaryHvr  bg-primary 
                border-transparent shadow-lg rounded-md transition-all duration-300 '>Currency</button>
                <button href='#' className='w-btnw h-btnh text-white hover:bg-secondaryHvr  bg-primary 
                border-transparent shadow-lg rounded-md transition-all duration-300  '>Temperature</button>
            </div>
        </div>
    )
}
export default CTSelector