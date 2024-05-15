import {styled} from "styled-components";
import {useState, useEffect} from "react";

import {Container} from "./Container.tsx";
import {IoMoon, IoMoonOutline} from "react-icons/io5";

const HeaderElem = styled.header`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
    href: '/'
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: bold;
  text-decoration: none;
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

const Header = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <HeaderElem>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size='14px'/>
                        ) : (
                            <IoMoon size='14px'/>
                        )}
                        <span style={{margin: '0.75rem'}}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElem>
    );
};

export default Header;