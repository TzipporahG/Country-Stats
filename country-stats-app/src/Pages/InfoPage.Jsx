import { InfoBox } from "../InfoBox";

export function InfoPage() {
    return (
        <InfoBox
            header="Info Page"
            items={[
                "This is an info page.",
                "It contains information about the application.",
                "You can find various details here."
            ]}
        />  
    )
}