import { useState } from "react";

export function SearchBox({ onDataFetched }) {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setSearch(e.target.value);

    const fetchData = async () => {
        if (!search.trim()) return; // Don't fetch empty
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}?fields=flags,coatOfArms,name,cca3,capital,languages,continents,area,borders,currencies,demonyms,car,startOfWeek`);
            const result = await response.json();
            if (onDataFetched) {
                onDataFetched(result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter country name"
                value={search}
                onChange={handleChange}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                aria-label="Country search input"
            />
            <button className="search-button" onClick={handleSearch} disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </button>
        </>
    );
}
