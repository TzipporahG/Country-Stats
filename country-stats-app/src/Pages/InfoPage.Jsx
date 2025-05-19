import { InfoBox } from "../InfoBox";
import { SmallImage } from "./SmallImage";

export function InfoPage() {
    return (
        <>
            <InfoBox
                header="Stats"
                categories={["Area", "Borders", "Currencies", "Demonym", "Native Name"]}
                items={[
                    "area", "borders", "currencies", "demonym", "nativeName"
                ]}
            />
            <SmallImage
                link="https://mainfacts.com/media/images/coats_of_arms/us.svg"
                alt="This is just here for examples sake right now"
            />
            <InfoBox
                header="Fun Facts"
                categories={["Car Driving Side", "Start of Week"]}
                items={[
                    "driving side", "day of week"
                ]}
            />
        </>
    );
}
