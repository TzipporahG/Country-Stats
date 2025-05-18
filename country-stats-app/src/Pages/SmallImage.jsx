export function SmallImage(props) {
    return (
        <figure>
        <img src={props.link} alt={props.alt} width="320" />
        <figcaption>{props.alt}</figcaption>
        </figure>
    )
}