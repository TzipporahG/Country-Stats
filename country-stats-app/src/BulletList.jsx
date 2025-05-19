import {ListItem} from './ListItem.jsx';

export function BulletList({ category, items }) {
    return (
        <ul className="bullet-list">
                <ListItem category={category} item={items} />
        </ul>
    )
}