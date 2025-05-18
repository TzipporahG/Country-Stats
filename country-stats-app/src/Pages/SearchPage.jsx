import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from '../SearchBox';

export function SearchPage() {
    const [countryStats, setCountryStats] = useState(null);
    const handleDataChange = (newData) => {
        setCountryStats(newData);
      };

    return (
        <>
            <SearchBox onDataFetched={handleDataChange} />
            <Link to="/info">Go to Info Page</Link>
            <p>{countryStats ? <pre>{JSON.stringify(countryStats, null, 2)}</pre> : 'No data yet.'}</p>
        </>
    );
}