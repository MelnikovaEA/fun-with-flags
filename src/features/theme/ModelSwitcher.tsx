import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {styled} from "styled-components";
import {useTheme} from "./use-theme.ts";

const Wrapper = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;


const ModelSwitcher = () => {

    const [theme, toggleTheme] = useTheme();

    return (
        <Wrapper onClick={toggleTheme}>
            {theme === 'light' ? (
                <IoMoonOutline size='14px'/>
            ) : (
                <IoMoon size='14px'/>
            )}
            <span style={{margin: '0.75rem'}}>{theme} Theme</span>
        </Wrapper>
    );
};

export default ModelSwitcher;