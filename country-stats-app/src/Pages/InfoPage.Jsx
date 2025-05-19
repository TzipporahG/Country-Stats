import "./InfoPage.css";
import { useLocation } from "react-router-dom";
import { InfoBox } from "../InfoBox";
import { InfoHeading } from "../InfoHeading";
import { SmallImage } from "../SmallImage";
import { Header } from "../Header";

export function InfoPage() {
    const location = useLocation();
    const country = location.state?.country;
    
    return (
        <div className="info-page">
            <Header pageName="Information"/>
        <div className="container">
            <div className="top-row">
                <SmallImage
                    link={country.flags.svg}
                    alt={country.flags.alt}
                />
                <InfoHeading
                    country={country.name.common}
                    countryCode={country.cca3}
                    categories={["Capital City", "Language", "Continent"]}
                    items={[
                        country.capital?.[0] || "N/A",                          // Capital might be an array
                        Object.values(country.languages || {}).join(", "),     // Languages is an object
                        country.continents?.[0] || "N/A"                       // Continent might be an array
                    ]}
                />
                <SmallImage
                    link={country.coatOfArms.svg}
                    alt="Coat of Arms"
                />
            </div>
            <div className="bottom-row">
                <InfoBox
                    header="Stats"
                    categories={["Area", "Borders", "Currencies", "Demonym", "Official Native Name"]}
                    items={[
                        `${country.area.toLocaleString()} km²`, // Formatting number
                        (country.borders || []).join(", "), // Borders is an array of country codes
                        Object.values(country.currencies || {})
                            .map(curr => `${curr.name} (${curr.symbol})`)
                            .join(", "),
                        country.demonyms?.eng?.m || "N/A",
                        Object.values(country.name.nativeName || {})
                            .map(nameObj => nameObj.official)
                            .join(", ")
                    ]}
                />
                <InfoBox
                    header="Fun Facts"
                    categories={["Car Driving Side", "Start of Week"]}
                    items={[
                        country.car.side, country.startOfWeek
                    ]}
                />
            </div>
        </div>
        </div>
    );
}
