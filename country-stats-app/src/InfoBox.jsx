
import { BulletList } from "./BulletList";

export function InfoBox({ header, categories, items }) {
    return (
        <div className="info-box">
            <h2 className="info-box-header">{header}</h2>
            <BulletList categories={categories} items={items} />
        </div>
    );
}

