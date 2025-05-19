import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchBox } from '../SearchBox';

export function SearchPage() {
    const [countryStats, setCountryStats] = useState(null);
    const navigate = useNavigate();

    const handleDataChange = (newData) => {
        setCountryStats(newData);
      };

    const handleCountryClick = (index) => {
        navigate('/info', {state:{country: countryStats[index]}})
    }

    return (
        <>
            <SearchBox onDataFetched={handleDataChange} />
            {countryStats === null ? (
                <p>No data yet.</p>
            ) : countryStats.length === 0 ? (
                <p>No countries found.</p>
            ) : (
                <ul>
                    {countryStats.map((country, index) => (
                        <li key={country.name.common}>
                            <button onClick={() => handleCountryClick(index)}>
                                {country.name.common}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}