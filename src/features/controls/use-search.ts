import { ChangeEventHandler } from 'react';
import {useSelector} from 'react-redux';
import { useAppDispatch } from '../../store.ts';
import { selectSearch } from './controls-selectors.ts';
import { setSearch } from './controlsSlice.ts';

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
    const dispatch = useAppDispatch();
    const search = useSelector(selectSearch);

    const handleSearch: onSearch = (e) => {
        dispatch(setSearch(e.target.value))
    }

    return [search, handleSearch];
}
