import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;

  .blog-goBack {
    text-decoration: none;
    font-size: 0.8rem;
    color: #a9a9a9;
    font-weight: 500;
    margin-bottom: 2rem;
    display: block;
  }

  .blog-wrap {
    header {
      text-align: center;
    }

    p {
      font-size: 0.8rem;
      color: #a9a9a9;
      font-weight: 500;
    }

    img {
      width: 100%;
    }

    .blog-subCategory {
      display: flex;
      justify-content: center;
    }
    > div {
      margin: 1rem;
    }

    .blog-des {
      padding: 1rem;
      margin-top: 1.5rem;
    }
  }
`;
