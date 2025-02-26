import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import NewsList from "../components/NewsList";

const API_KEY = "3a7d8669903c3dbd1721ee29d262774b"; // Replace with your actual API Key
const BASE_URL = "https://gnews.io/api/v4/";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const observer = useRef();

  useEffect(() => {
    setArticles([]); // Reset articles when category changes
    setPage(1);
    fetchNews(true);
  }, [category]);

  const fetchNews = async (reset = false) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${BASE_URL}top-headlines?category=${category}&q=${searchQuery}&lang=en&page=${page}&token=${API_KEY}`
      );

      const newArticles = response.data.articles.filter(
        (newArticle) => !articles.some((existingArticle) => existingArticle.url === newArticle.url)
      );

      setArticles((prev) => (reset ? newArticles : [...prev, ...newArticles]));
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Observer for Infinite Scrolling
  const lastArticleRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNews(false);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setArticles([]);
    setPage(1);
    fetchNews(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setCategory={setCategory} />
      <div className="container mx-auto px-4 pt-20">
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search News..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-lg px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <NewsList articles={articles} lastArticleRef={lastArticleRef} />
        
        {loading && <p className="text-center mt-4">Loading more news...</p>}
      </div>
    </div>
  );
};

export default Dashboard;
