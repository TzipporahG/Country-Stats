import { BulletList } from "./BulletList";

export function InfoHeading({ country, categories, items }) {
    return (
        <>
            <h1>{country}</h1>
            <BulletList category={categories} items={items} />
        </>
    )
}