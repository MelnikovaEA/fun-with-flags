import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ALL_COUNTRIES} from "../../../config.ts";
import Controls from "../Controls.tsx";
import List from "../List.tsx";
import Card from "../Card.tsx";
import {useCountries} from "../contexts/CountriesContext.tsx";

export type Country = {
    flag: string,
    name: string,
    info: { title: string, description: string }[],
}

const HomePage = () => {

    const navigate = useNavigate();

    const {countries, setCountries} = useCountries();
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter(el => el.region.includes(region))
        }

        if (search) {
            data = data.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data);
    }

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));
        }
    }, [countries]);

    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => {
                    const countryInfo: Country = {
                        flag: country.flags.svg,
                        name: country.name.common,
                        info: [
                            {
                                title: 'Region',
                                description: country.region,
                            },
                            {
                                title: 'Capital',
                                description: country.capital,
                            },
                            {
                                title: 'Population',
                                description: country.population.toLocaleString(),
                            }
                        ],
                    };

                    return <Card
                        key={country.name.common}
                        onClick={() => {
                            navigate(`country/${country.name.common}`)
                        }}
                        {...countryInfo}
                    />;
                })
                }
            </List>
        </>
    );
};

export default HomePage;

