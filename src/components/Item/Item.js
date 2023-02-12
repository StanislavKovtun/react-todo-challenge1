import styles from './Item.module.css';

const Item = (props) => {
    return (
        //<div className="item2">
            <li className={styles.item}>{`${props.item.name} ${props.item.age}`}</li>
        //</div>
    )
}

export default Item;