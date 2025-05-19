import { useState, useEffect } from "react";

export function SearchBox({ onDataFetched }) {
    const [search, setSearch] = useState('');
    const handleChange = (e) => setSearch(e.target.value);
    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        if (!shouldFetch) return;

        const fetchData = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}?fields=name,flags,coatOfArms`);
            const result = await response.json();
            if (onDataFetched) {
                onDataFetched(result); // send data to parent
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setShouldFetch(false); // reset trigger
        }
        };

        fetchData();
    }, [shouldFetch]);

    return (
        <>
            <input type="text" placeholder="Enter country name here" onChange={handleChange}/>
            <button onClick={() => setShouldFetch(true)}>Search</button>
        </>
    );
}