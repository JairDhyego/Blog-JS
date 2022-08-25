import React from "react";

import { Container } from "./styles";

const SearchBar = ({ value, formSubmit, clearSearch, handleSearchKey }) => (
  <Container>
    <form onSubmit={formSubmit}>
      <input
        placeholder="Search by category"
        type="text"
        onChange={handleSearchKey}
        value={value}
      />
      {value && <span onClick={clearSearch}> X </span>}
      <button>Go</button>
    </form>
  </Container>
);

export default SearchBar;
