import axios from 'axios';
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import * as api from '../config.ts';
import {themeReducer} from "./features/theme/themeSlice.ts";
import {countriesReducer} from "./features/countries/countriesSlice.ts";
import {controlsReducer} from "./features/controls/controlsSlice.ts";
import {detailsReducer} from "./features/details/detailsSlice.ts";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer,
        controls: controlsReducer,
        details: detailsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;