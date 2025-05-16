import { InfoBoxHeader } from "./InfoBoxHeader";
import { BulletList } from "./BulletList";

export function InfoBox({ header, items }) {
    return (
        <div className="info-box">
            <InfoBoxHeader header={header} />
            <BulletList items={items} />
        </div>
    );
}