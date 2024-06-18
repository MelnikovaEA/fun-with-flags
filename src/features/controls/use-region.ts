import {useSelector} from 'react-redux'
import { SingleValue } from 'react-select';
import { useAppDispatch } from '../../store.ts';
import { Regions } from '../../types';
import { selectRegion } from './controls-selectors.ts';

import { setRegion } from './controlsSlice.ts';
import { CountryOption } from './CustomSelect.tsx';

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [Regions | '', onSelect] => {
    const dispatch = useAppDispatch();
    const region = useSelector(selectRegion);

    const handleSelect: onSelect = (reg) => {
        if (reg) {
            dispatch(setRegion(reg.value))
        } else {
            dispatch(setRegion(''));
        }
    }

    return [region, handleSelect];
}
