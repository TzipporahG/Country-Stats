import {listItem} from './ListItem.jsx';

export function BulletList({ category, items }) {
    return (
        <ul className="bullet-list">
            {items.map((item, index) => (
                <listItem key={index} category={category} item={item} />
            ))}
        </ul>
    )
}