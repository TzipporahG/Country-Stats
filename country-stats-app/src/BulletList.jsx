export function BulletList({ categories = [], items = [] }) {
    return (
        <ul className="bullet-list">
            {categories.map((category, index) => (
                <li key={index}>{category}: {items[index]}</li>
            ))}
        </ul>
    );
}