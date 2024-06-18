import {useNavigate} from 'react-router-dom';
import {CountryInfo} from '../../types';
import List from '../../components/List.tsx';
import Card from '../../components/Card.tsx';
import {useCountries} from './use-countries.ts';

const CountryList = () => {
    const navigate = useNavigate();

    const [countries, {error, status}] = useCountries();

    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}

            {status === 'received' && (
                <List>
                    {countries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((c) => {
                        const countryInfo: CountryInfo = {
                            flag: c.flags.png,
                            name: c.name.common,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital[0],
                                },
                            ],
                        };

                        return (
                            <Card
                                key={c.name.common}
                                onClick={() => void navigate(`/country/${c.name.common}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    )
}

export default CountryList;
