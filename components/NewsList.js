
import React from 'react';

const NewsList = ({ news }) => {
  return (
    <div>
      <h2>News</h2>
      <ul>
      {news.map((article, index) => (
  <li key={index}>
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      {article.title}
    </a>
  </li>
))}

      </ul>
    </div>
  );
};

export default NewsList;
