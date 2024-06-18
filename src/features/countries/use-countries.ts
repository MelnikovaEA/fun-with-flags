import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Country} from "../../types";
import {loadCountries} from "./asyncCountriesActions.ts";
import {selectCountriesInfo, selectVisibleCountries} from './countries-selectors.ts';
import {RootState, useAppDispatch} from '../../store.ts';
import {selectControls} from "../controls/controls-selectors.ts";

export const useCountries = (): [
    Country[],
    ReturnType<typeof selectCountriesInfo>
] => {
    const dispatch = useAppDispatch();
    const controls = useSelector(selectControls);
    const countries = useSelector((state: RootState) => selectVisibleCountries(state, controls));
    const {status, error, qty} = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!qty) {
            dispatch(loadCountries());
        }
    }, [qty, dispatch]);

    return [countries, {status, error, qty}];
}
