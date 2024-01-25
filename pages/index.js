
// import React, { useState, useEffect } from 'react';
// import CountrySelector from '../components/CountrySelector';
// import CategorySelector from '../components/CategorySelector';
// import NewsList from '../components/NewsList';
// import Navbar from '../components/Navbar';

// const Home = () => {
//   const [country, setCountry] = useState('us');
//   const [category, setCategory] = useState('sgeneral');
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
//         );

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setNews(data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, [country, category]);

//   return (
//     <div>
//       <Navbar/>
//       <h1>News App</h1>
//       <CountrySelector onSelectCountry={setCountry} />
//       <CategorySelector onSelectCategory={setCategory} />
//       <NewsList news={news} />
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import CountrySelector from '../components/CountrySelector';
// import CategorySelector from '../components/CategorySelector';
// import NewsList from '../components/NewsList';
// import Navbar from '../components/Navbar';

// const Home = () => {
//   const [country, setCountry] = useState('us');
//   const [category, setCategory] = useState('sgeneral');
//   const [news, setNews] = useState([]);
//   const [isLoggedIn, setLoggedIn] = useState(false); // Add a state for login status

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
//         );

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setNews(data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     if (isLoggedIn) {
//       fetchNews();
//     }
//   }, [country, category, isLoggedIn]);

//   return (
//     <div>
//       {isLoggedIn && <Navbar />} {/* Render Navbar if logged in */}
//       <h1>News App</h1>
//       {!isLoggedIn && (
//         <div>
//           {/* Your login component or logic goes here */}
//           <button onClick={() => setLoggedIn(true)}>Login</button>
//         </div>
//       )}
//       {isLoggedIn && (
//         <div>
//           <CountrySelector onSelectCountry={setCountry} />
//           <CategorySelector onSelectCategory={setCategory} />
//           <NewsList news={news} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// pages/_app.js

import React, { useState, useEffect } from 'react';
import CountrySelector from '../components/CountrySelector';
import CategorySelector from '../components/CategorySelector';
import NewsList from '../components/NewsList';
import Navbar from '../components/Navbar';

const Home = () => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('sgeneral');
  const [news, setNews] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false); // Add a state for login status

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    if (isLoggedIn) {
      fetchNews();
    }
  }, [country, category, isLoggedIn]);

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn && <Navbar />} {/* Render Navbar if logged in */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">News App</h1>
        {!isLoggedIn && (
          <div className="mb-4">
            {/* Your login component or logic goes here */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setLoggedIn(true)}
            >
              Login
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <CountrySelector onSelectCountry={setCountry} />
            <CategorySelector onSelectCategory={setCategory} />
            <NewsList news={news} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
