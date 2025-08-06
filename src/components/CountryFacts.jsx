import { useEffect, useState } from 'react'

const CountryFacts = ({ baseCurrency }) => {

    const [countryinfo, setCountryInfo] = useState(null);

    const apiKey = 'Uz8GPAc2Jg9YYDhjmZCIRA==wgW5uNH7BxBwIVEv';
    const apiUrl = `https://restcountries.com/v3.1/currency/${baseCurrency}`

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                for (const index of data) {
                    if (index.name.common == 'United States') {
                        console.log(index);
                    }
                }

                setCountryInfo(data);
            })
            .catch(err => console.error('Error', err));

    }, [baseCurrency]);


    return (
        <div>
            <div className='base-country'>

            </div>
        </div>
    )
}
export default CountryFacts