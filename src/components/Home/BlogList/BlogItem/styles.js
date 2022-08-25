import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0.5rem 0rem 1rem 0rem;
    flex: 1;
  }

  p {
    position: relative;
    max-height: 50px;
    overflow: hidden;
    font-size: 0.8rem;
    padding-right: 0.5rem;
    color: #a9a9a9;
  }

  p::before {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 0.5rem;
      }

      p {
        font-size: 0.6rem;
        color: #a9a9a9;
        font-weight: 600;
      }
    }

    .link {
      text-decoration: none;
      color: inherit;
    }
  }
`;
