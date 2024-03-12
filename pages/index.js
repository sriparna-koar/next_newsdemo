import React, { useState, useEffect } from 'react';
import CountrySelector from '../components/CountrySelector';
import CategorySelector from '../components/CategorySelector';
import NewsList from '../components/NewsList';

const Home = () => {
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (country && category) {
      fetchNews();
    }
  }, [country, category]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.articles.length === 0) {
        setNews([]);
        setErrorMessage("No news available for the selected country and category.");
      } else {
        setNews(data.articles);
        setErrorMessage('');
      }

      // Simulate loading time for demonstration purposes
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the duration as needed
    } catch (error) {
      console.error('Error fetching news:', error);
      setErrorMessage("An error occurred while fetching news. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-gray-900 z-0"></div>
      <div className="container mx-auto p-4 relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">News App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <CountrySelector onSelectCountry={setCountry} />
          </div>
          <div>
            <CategorySelector onSelectCategory={setCategory} />
          </div>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {!loading && !errorMessage && (
          <div>
            <p className="text-2xl my-4">Total News: {news.length}</p>
            <NewsList news={news} />
          </div>
        )}
        {loading && (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-10 w-10 mr-3"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.27-1.746-9.565-4.479l1.45-1.45zm16.481-1.414A7.962 7.962 0 0020 12h4c0 3.042-1.374 5.77-3.519 7.585l-1.45-1.45z"
              ></path>
            </svg>
            <p className="text-xl">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from 'react';
// import CountrySelector from '../components/CountrySelector';
// import CategorySelector from '../components/CategorySelector';
// import NewsList from '../components/NewsList';

// const Home = () => {
//   const [country, setCountry] = useState('');
//   const [category, setCategory] = useState('');
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (country && category) {
//       fetchNews();
//     }
//   }, [country, category]);

//   const fetchNews = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
//       );

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setNews(data.articles);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching news:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen relative">
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-gray-900 z-0"></div>
//       <div className="container mx-auto p-4 relative z-10 text-white">
//         <h1 className="text-4xl font-bold mb-8 text-center">News App</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <CountrySelector onSelectCountry={setCountry} />
//           </div>
//           <div>
//             <CategorySelector onSelectCategory={setCategory} />
//           </div>
//         </div>
//         {!loading && (
//           <div>
//             <p className="text-2xl my-4">Total News: {news.length}</p>
//             <NewsList news={news} />
//           </div>
//         )}
//         {loading && (
//           <div className="flex justify-center items-center">
//             <svg
//               className="animate-spin h-10 w-10 mr-3"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.27-1.746-9.565-4.479l1.45-1.45zm16.481-1.414A7.962 7.962 0 0020 12h4c0 3.042-1.374 5.77-3.519 7.585l-1.45-1.45z"
//               ></path>
//             </svg>
//             <p className="text-xl">Loading...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
