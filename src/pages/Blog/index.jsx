import React, { useEffect, useState } from "react";
import { blogList } from "../../config/data";

import { Link, useParams } from "react-router-dom";
import Chip from "./../../components/common/Chip/index";
import EmptyList from "../../components/common/EmptyList";

import { Container } from "./styles";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <Container>
      <Link to="/" className="blog-goBack">
        <span>&#8592;</span>Go Back
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <p>Publicshed {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <Chip key={index} label={category} />
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </Container>
  );
}

export default Blog;
