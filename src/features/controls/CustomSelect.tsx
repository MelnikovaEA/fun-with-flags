import styled from "styled-components";
import Select, {Props} from 'react-select';
import {Regions} from "../../types";

export type CountryOption = {
    label: Regions,
    value: Regions,
} | '';

function MySelect(props: Props<CountryOption, false>) {
    return (
        <Select {...props} />
    );
}


const CustomSelect = styled(MySelect).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radius)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected
                ? 'var(--colors-bg)'
                : 'var(--colors-ui-base)',
        })
    },
})`
  width: 200px;
  border: none;
  border-radius: var(--radius);
  font-family: var(--family);

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--colors-text) !important;
  }

  & input {
    padding-left: 0.25rem;
  }

  & > div {
    background: var(--colors-ui-base);
  }
`

export default CustomSelect;