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
            {countryStats ? (
                <>
                    {countryStats.map((country, index) => (
                        <button onClick={() => handleCountryClick(index)} key={index}>{country.name.common}</button>
                    ))}
                </>
            ) : (
                <p>No data yet.</p>
            )}
        </>
    );
}