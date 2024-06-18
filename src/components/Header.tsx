import {styled} from "styled-components";
import {Link, LinkProps} from "react-router-dom";
import {Container} from "./Container.tsx";
import ModelSwitcher from "../features/theme/ModelSwitcher.tsx";
import {useCleanup} from "../features/controls/use-cleanUp.ts";

const HeaderElem = styled.header`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Title = styled(Link)<LinkProps>`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: bold;
  text-decoration: none;
`;

const Header = () => {

    const cleanUp = useCleanup();

    return (
        <HeaderElem>
            <Container>
                <Wrapper>
                    <Title to="/" onClick={cleanUp}>Where is the world?</Title>
                    <ModelSwitcher/>
                </Wrapper>
            </Container>
        </HeaderElem>
    );
};

export default Header;