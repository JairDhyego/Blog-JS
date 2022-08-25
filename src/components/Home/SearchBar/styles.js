import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f0f0;
  width: fit-content;
  margin: 2.5rem auto 4rem auto;
  padding: 0.5rem;
  border-radius: 5px;

  form{
    display: flex;
    align-items: center;

    input{

    background-color: #f0f0f0;
    outline: none;
    border: none;
    }

    span{

    padding-right: 0.5rem;
    cursor: pointer;
    }

    button{

      outline: none;
      border: none;
      padding: 0.3rem 1rem;
      border-radius: 5px;
      background-color: #0f52ba;
      color: #fff;
    }
  }

  
`;
