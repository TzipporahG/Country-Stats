import { InfoBoxHeader } from "./InfoBoxHeader";
import { BulletList } from "./BulletList";

export function InfoBox({ header, categories, items }) {
    return (
        <div className="info-box">
            <InfoBoxHeader header={header} />
            {categories.map((category, index) => (
                <BulletList key={index} category={category} items={items[index]} />
            ))}
        </div>
    );
}