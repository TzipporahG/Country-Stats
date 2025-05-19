import { BulletList } from "./BulletList";

export function InfoHeading({ country, countryCode, categories, items }) {
    return (
        <div className="info-heading">
            <h1>{country}({countryCode})</h1>
            {categories.map((category, index) => (
                <BulletList key={index} category={category} items={items[index]} />
            ))}
        </div>
    )
}

