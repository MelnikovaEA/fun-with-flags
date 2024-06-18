import {Regions} from "./regions.ts";

type NativeName = {
    [key: string]: {
        official: string;
        common: string;
    };
}

type Languages = {
    [key: string]: string
}

type Currencies = {
    [key: string]: {
        name: string;
        symbol: string;
    };
}

export type Country = {
    name: {
        common: string,
        official: string,
        nativeName: NativeName,
    }
    flags: {
        png: string,
        svg: string,
        alt: string,
    },
    capital: string[],
    population: number,
    region: Regions,
    subregion: string,
    tld: string[],
    currencies: Currencies,
    languages: Languages,
    borders: string[],
}

type Info = { title: string, description: string }

export type CountryInfo = {
    flag: string,
    name: string,
    info: Info[],
}