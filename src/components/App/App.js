import { useState } from 'react';
import styles from './App.module.css';
import ItemList from '../ItemsList/ItemList';
import NewItem from '../NewItem/NewItem';
//import ErrorModal from '../ErrorModal/ErrorModal';

function App() {

    const initialState = [
        {
            id: 1,
            name: 'Stanislav',
            age: 36
        },
        {
            id: 2,
            name: 'Viktoria',
            age: 34
        },
        {
            id: 3,
            name: 'Violet',
            age: 3
        },
    ];

    const [items, setItems] = useState(initialState);

    const addItemHandler = (newItem) => {
        console.log(newItem);
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (
        <div className={styles.app}>
            <h1>
                My React Challenge
            </h1>
            <NewItem onAddItem={addItemHandler} />
            <ItemList items={items} />
        </div>
    );
}

export default App;
