import React from "react";

import { Container } from "./styles";
import Chip from "./../../../common/Chip/index";
import { Link } from "react-router-dom";

function BlogItem({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}) {
  return (
    <Container>
      <img src={cover} alt="cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p>{description}</p>

      <footer>
        <div>
          <img src={authorAvatar} alt="Avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="link" to={`/blog/${id}`}>
          Go
        </Link>
      </footer>
    </Container>
  );
}

export default BlogItem;
