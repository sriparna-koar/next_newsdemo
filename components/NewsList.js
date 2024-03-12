
// import React from 'react';

// const NewsList = ({ news }) => {
//   return (
//     <div>
//       <h2>News</h2>
//       <ul>
//       {news.map((article, index) => (
//   <li key={index}>
//     <a href={article.url} target="_blank" rel="noopener noreferrer">
//       {article.title}
//     </a>
//   </li>
// ))}

//       </ul>
//     </div>
//   );
// };

// export default NewsList;

// import React from 'react';

// const NewsList = ({ news }) => {
//   return (
//     <div className="mt-4">
//       {news && news.map((article, index) => (
//         <div key={index} className="mb-4">
//           <p className="font-semibold">{article.title}</p>
//           {article.publishedAt && (
//             <p className="text-gray-500">{new Date(article.publishedAt).toLocaleString()}</p>
//           )}
//           <p>{article.description}</p>
//           {article.url && (
//             <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsList;



// import React from 'react';

// const NewsList = ({ news }) => {
//   return (
//     <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//       {news && news.map((article, index) => (
//         <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
//           <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover object-center" />
//           <div className="p-4">
//             <p className="text-lg font-semibold mb-2">{article.title}</p>
//             <p className="text-sm text-gray-400 mb-2">{new Date(article.publishedAt).toLocaleString()}</p>
//             <p className="text-sm text-gray-300">{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500 hover:underline">Read more</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsList;
import React from 'react';

const NewsList = ({ news }) => {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {news && news.map((article, index) => (
        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover object-center" />
          )}
          <div className="p-4">
            <p className="text-lg font-semibold mb-2">{article.title}</p>
            <p className="text-sm text-gray-400 mb-2">{new Date(article.publishedAt).toLocaleString()}</p>
            <p className="text-sm text-gray-300">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500 hover:underline">Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
