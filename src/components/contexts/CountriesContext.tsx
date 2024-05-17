import React, { createContext, useState, useContext } from 'react';

const CountryContext = createContext({});

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);

    return (
        <CountryContext.Provider value={{ countries, setCountries }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountries = () => useContext(CountryContext);
