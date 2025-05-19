import './SearchPage.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchBox } from '../SearchBox';
import { Header } from '../Header';

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
            <Header pageName="Search Page" />
            <SearchBox onDataFetched={handleDataChange} />

            {countryStats ? 
                (countryStats.length > 0 ?  
                    (<ul>
                        {countryStats.map((country, index) => (
                            <li className="country-button" key={country.name.common}>
                                <button onClick={() => handleCountryClick(index)}>
                                    {country.name.common}
                                </button>
                            </li>
                        ))}
                    </ul>) 
                : (<p>No countries found</p>))
            : <></> }
        </>
    );
}