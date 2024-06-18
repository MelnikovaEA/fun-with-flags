import styled from "styled-components";
import {IoSearchSharp} from "react-icons/io5";
import { useSearch } from './use-search.ts';

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

const Search = () => {
    const [search, handleSearch] = useSearch();

    return (
        <InputContainer>
            <SearchIcon size='14px'/>
            <Input onChange={handleSearch} value={search} />
        </InputContainer>
    );
};

export default Search;

