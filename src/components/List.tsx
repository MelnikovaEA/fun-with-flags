import React, {ReactNode} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem;
  
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media(min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    
    padding: 2.5rem;
  }
  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`

interface ListProps {
    children: ReactNode,
}

const List: React.FC<ListProps> = ({children}) => {
    return <Wrapper> {children} </Wrapper>
};

export default List;