import { ListItem } from './ListItem.jsx';

export function BulletList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </ul>
    );
}