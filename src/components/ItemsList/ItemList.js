import Item from "../Item/Item";
import './ItemList.module.css';

const ItemList = (props) => {

    !props.items.length && <p>Items no found!</p>

    return (
        <ul className="item-list">
            {props.items.length > 0 && props.items.map((item) => <Item key={item.id} item={item} />)}
        </ul>
    )
}

export default ItemList;