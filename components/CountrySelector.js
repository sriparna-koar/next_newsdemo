import React from 'react';

const CountrySelector = ({ onSelectCountry }) => {
  const countries = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'in', 'jp', 'br', 'mx'];

  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select id="country" onChange={(e) => onSelectCountry(e.target.value)}>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
