import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from './NewItem.module.css';

const NewItem = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (event) => {
        const nameInputValue = event.target.value;
        setName(nameInputValue);
    }

    const ageChangeHandler = (event) => {
        const ageInputValue = event.target.value;
        setAge(ageInputValue);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!name.trim()) {
            console.log('Inalid name');
            setError({
                title: 'Invalid name',
                message: `Name can't be empty`
            });
            return;
        }

        if (!age.trim() || +age < 1) {
            console.log('Inalid age');
            setError({
                title: 'Invalid age',
                message: 'Age must be > 0'
            });
            return;
        }

        const newItem = {
            id: Date.now(),
            name,
            age,
        };

        props.onAddItem(newItem);
        setName('');
        setAge('');
    }

    const onCloseErrorHandler = () => {
        console.log('close error');
        setError();
    }

    console.log(error);

    return (
        <div className="new-item">
            {error && <ErrorModal title={error.title} message={error.message} onCloseError={onCloseErrorHandler} />}
            <form className={styles['new-item-form']} action="" onSubmit={formSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input id='name' type='text' value={name} onChange={nameChangeHandler}></input>
                <label>Age</label>
                <input type='number' value={age} onChange={ageChangeHandler}></input>
                <button type='submit'>Add new item</button>
            </form>
        </div>
    )
}

export default NewItem;