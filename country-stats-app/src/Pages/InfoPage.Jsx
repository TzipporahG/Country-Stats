import { InfoBox } from "../InfoBox";
import { InfoHeading } from "../InfoHeading";
import { SmallImage } from "../SmallImage";
import { Header } from "../Header";

export function InfoPage() {
    return (
        <div className="info-page">
        <Header pageName = "Information"/>
        <div className="container">
            <div className="top-row">
                <SmallImage
                    link="https://mainfacts.com/media/images/coats_of_arms/us.svg"
                    alt="This is just here for examples sake right now"
                />
                <InfoHeading
                    country={"United States"}
                    countryCode={"USA"}
                    categories={["Capital City", "Language", "Continent"]}
                    items={[
                         "Washington, D.C.", "English", "North America"
                    ]}
                />
                <SmallImage
                    link="https://mainfacts.com/media/images/coats_of_arms/us.svg"
                    alt="This is just here for examples sake right now"
                />
            </div>
            <div className="bottom-row">
                <InfoBox
                    header="Stats"
                    categories={["Area", "Borders", "Currencies", "Demonym", "Native Name"]}
                    items={[
                        "area", "borders", "currencies", "demonym", "nativeName"
                    ]}
                />
                <InfoBox
                    header="Fun Facts"
                    categories={["Car Driving Side", "Start of Week"]}
                    items={[
                        "driving side", "day of week"
                    ]}
                />
            </div>
        </div>
    </div>
    );
}
