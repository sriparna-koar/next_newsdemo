// // components/NewsList.js
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// const NewsList = ({ defaultCountry = 'us' }) => {
//   const [country, setCountry] = useState(defaultCountry);
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

//         const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
//         const data = await response.json();

//         if (response.ok) {
//           setNews(data.articles);
//         } else {
//           console.error('Error fetching news:', data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, [country]); // Include 'country' as a dependency so that it re-fetches when the country changes

//   const handleCountryChange = (e) => {
//     setCountry(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Top Headlines</h1>
//       <div>
//         <label htmlFor="country">Select Country:</label>
//         <input
//           type="text"
//           id="country"
//           value={country}
//           onChange={handleCountryChange}
//           placeholder="Enter country code"
//         />
//       </div>
//       <ul>
//         {news.map((article) => (
//           <li key={article.title}>
//             <h2>{article.title}</h2>
//             <Link href={article.url} passHref>
//               <a>{article.url}</a>
//             </Link>
//             <p>{article.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewsList;
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
