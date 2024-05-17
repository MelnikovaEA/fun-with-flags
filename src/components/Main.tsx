import React from "react";
import styled from "styled-components";
import {Container} from "./Container.tsx";

const Wrapper = styled.div`
  padding: 2rem 0;
  
  @media (min-width: 767px) {
    padding: 2rem 0;
  }
`;

const Main: React.FC<any> = ({children}) => {
    return (
      <Wrapper >
          <Container>
              {children}
          </Container>
      </Wrapper>
    );
};

export default Main;