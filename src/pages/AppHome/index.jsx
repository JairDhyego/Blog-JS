import React, { useState } from "react";
import EmptyList from "./../../components/common/EmptyList/index";
import BlogList from "./../../components/Home/BlogList/index";
import Header from "./../../components/Home/Header/index";
import SearchBar from "./../../components/Home/SearchBar/index";
import { blogList } from "./../../config/data";

function Home() {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      <Header />

      <SearchBar
        value={searchKey}
        formSubmit={handleSearchSubmit}
        clearSearch={handleClearSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {blogs.length > 0 ? <BlogList blogs={blogs} /> : <EmptyList />}
    </div>
  );
}

export default Home;
