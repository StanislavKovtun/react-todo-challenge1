const Item = (props) => {
    return (
        <div className="item">
            <li>{`${props.item.name} ${props.item.age}`}</li>
        </div>
    )
}

export default Item;