'use client';

import * as React from 'react';
import { Card, Button } from 'flowbite-react';

const CountryCard = (props) => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-28 w-full" src={props.image} alt={props.name} />
        <div className="p-4">
          <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
          <div className='flex flex-col gap-1'>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              <span className='font-medium'>Capital:</span>
              <span className='font-normal'>{props.capital}</span>
            </p>

            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              <span className='font-medium'>Population:</span>
              <span className='font-normal'>{props.population}</span>
            </p>
          </div>

        </div>
      </div>

    </>
  );
}

export default CountryCard