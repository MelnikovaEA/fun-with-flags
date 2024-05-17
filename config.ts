type Codes = string[];

const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name: string | undefined) => BASE_URL + 'name/' + name + '?fullText=true';

export const searchByCode = (code: string | undefined) => BASE_URL + 'alpha/' + code;

export const filterByCode = (codes: Codes) => BASE_URL + 'alpha?codes=' + codes.join(',');

