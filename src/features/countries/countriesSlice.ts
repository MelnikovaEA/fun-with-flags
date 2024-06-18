import {createSlice} from "@reduxjs/toolkit";
import {Country, Status} from '../../types';
import {loadCountries} from "./asyncCountriesActions.ts";

export type CountriesSlice = {
    status: Status,
    error: string | null,
    list: Country[],
}

const initialState: CountriesSlice = {
    status: 'idle',
    error: null,
    list: [],
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountries.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Cannot load data';
            })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload.data;
            })
    }
});

export const countriesReducer = countriesSlice.reducer;