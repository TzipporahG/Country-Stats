import { InfoBox } from "../InfoBox";
import { SmallImage } from "./SmallImage";

export function InfoPage() {
    return (
        <>
            <InfoBox
                header="Info Page"
                items={[
                    "This is an info page.",
                    "It contains information about the application.",
                    "You can find various details here."
                ]}
            />
            <SmallImage link="https://mainfacts.com/media/images/coats_of_arms/us.svg" alt="This is just here for examples sake right now"/>
        </>  

    )
}