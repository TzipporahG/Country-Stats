import { BulletList } from "./BulletList";

export function InfoHeading({ country, countryCode, categories, items }) {
    return (
        <div className="info-heading">
            <h1>{country}({countryCode})</h1>
            <BulletList categories={categories} items={items} />
        </div>
    )
}

