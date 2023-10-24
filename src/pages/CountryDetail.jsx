import { useState, useEffect } from 'react';
import { getAllCountries, getCountryByCode } from '../services';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {

  const { code } = useParams('code');
  const [country, setCountry] = useState({})

  useEffect(() => {
    getCountryByCode(code).then((res) => {
      console.log(res.data[0]);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }

    }).catch((error) => console.log(error))
  }, [code])

  return (
    <>
      <section className='container mx-auto'>
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex'>
            <img className="rounded-t-lg w-full" src={country?.flags?.png} alt={country?.name?.common} />
          </div>
        </div> */}

        <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full md:max-w-md rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg" src={country?.flags?.png} alt={country?.name?.common} />
          <div className="flex w-full flex-col justify-between p-4 leading-normal">
            <div class="flow-root">
              <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-2 sm:py-3">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-between w-full">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Country Name
                      </p>
                      <div class="flex items-center text-base font-semibold text-gray-900 dark:text-white truncate">
                        {country?.name?.common}
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-2 sm:py-3">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-between w-full">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Capital
                      </p>
                      <div class="flex items-center text-base font-semibold text-gray-900 dark:text-white truncate">
                        {country?.capital}
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-3 sm:py-3">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-between w-full">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Population
                      </p>
                      <div class="flex items-center text-base font-semibold text-gray-900 dark:text-white truncate">
                        {country?.population}
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-2 sm:py-3">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-between w-full">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Continent
                      </p>
                      <div class="flex items-center text-base font-semibold text-gray-900 dark:text-white truncate">
                        {country?.continents}
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-2 sm:py-3">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center justify-between w-full">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Currency
                      </p>
                      <div class="flex items-center text-base font-semibold text-gray-900 dark:text-white truncate">
                        {
                        country.currencies &&
                        country?.currencies?.map((currency) => {
                          return currency.name
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default CountryDetail