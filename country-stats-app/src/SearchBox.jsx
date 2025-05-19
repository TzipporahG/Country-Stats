import { useState } from "react";

export function SearchBox({ onDataFetched }) {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setSearch(e.target.value);

    const handleSearch = async () => {
        if (!search.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}?fields=flags,coatOfArms,name,cca3,capital,languages,continents,area,borders,currencies,demonyms,car,startOfWeek`);
            const result = await response.json();
            if (!Array.isArray(result)) throw new Error(result.message || "Invalid response");

            if (onDataFetched) {
                onDataFetched(result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
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
            <button onClick={handleSearch} disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </button>
        </>
    );
}
