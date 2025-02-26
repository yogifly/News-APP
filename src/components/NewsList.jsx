import React from "react";

const NewsList = ({ articles, lastArticleRef }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
      {articles.length > 0 ? (
        articles.map((article, index) => {
          if (index === articles.length - 1) {
            return (
              <div ref={lastArticleRef} key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {article.image && (
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-bold">{article.title}</h2>
                  <p className="text-gray-600 mt-2">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold mt-2 inline-block">
                    Read More
                  </a>
                </div>
              </div>
            );
          }
          return (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {article.image && (
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold">{article.title}</h2>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold mt-2 inline-block">
                  Read More
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-600 text-center col-span-3">No news available. Try a different category.</p>
      )}
    </div>
  );
};

export default NewsList;
