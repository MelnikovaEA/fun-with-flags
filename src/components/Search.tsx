import React from "react";
import styled from "styled-components";

import {IoSearchSharp} from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;
  
  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background: var(--colors-ui-base);
  color: var(--colors-text);
  position: relative;
`;

const SearchIcon = styled(IoSearchSharp)`
  position: absolute;
  z-index: 99;
`;

type SearchValues = {
    search: string,
    setSearch: (value: string) => void
}

const Search: React.FC<SearchValues> = ({search, setSearch}) => {
    return (
        <InputContainer>
            <SearchIcon size='14px'/>
            <Input onChange={(e)=>setSearch(e.target.value)} value={search}/>
        </InputContainer>
    );
};

export default Search;

