import { InfoBox } from "../InfoBox";

export function InfoPage() {
    return (
        <InfoBox
            header="Stats"
            categories={["Area", "Borders", "Currencies", "Demonym", "Native Name"]}
            items={[
                "area", "borders", "currencies", "demonym", "nativeName"
            ]}
        />  
    )
}