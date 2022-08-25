import React from "react";
import BlogItem from "./BlogItem/index";

import { Container } from "./styles";

function BlogList({ blogs }) {
  return (
    <Container>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </Container>
  );
}

export default BlogList;
