
import React from 'react';

const CountrySelector = ({ onSelectCountry }) => {
  const countries = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'in', 'jp', 'br', 'mx'];

  return (
    <div className="mt-4">
      <label htmlFor="country" className="block text-sm font-medium text-white-700 mb-2">Select Country:</label>
      <div className="relative">
        <select
          id="country"
          onChange={(e) => onSelectCountry(e.target.value)}
          className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:bg-gray-900 focus:border-gray-900 transition duration-300 ease-in-out hover:scale-105"
        >
          {countries.map((country) => (
            <option
              key={country}
              value={country}
              className="text-gray-900 bg-gray-100"
            >
              {country.toUpperCase()}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="h-5 w-5 fill-current transition duration-300 ease-in-out transform hover:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 6.707a1 1 0 011.414 0l3.293 3.293a1 1 0 001.414 0l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;
