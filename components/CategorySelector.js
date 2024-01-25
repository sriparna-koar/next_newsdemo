import React from 'react';

const CategorySelector = ({ onSelectCategory }) => {
    const categories = [
        'general',
        'business',
        'entertainment',
        'health',
        'science',
        'sports',
        'technology',
        // Add more categories as needed
      ];
      

  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select id="category" onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
