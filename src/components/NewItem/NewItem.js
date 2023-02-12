import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from './NewItem.module.css';

const NewItem = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isValidInput, setIsValidInput] = useState(true);

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
            setIsValidInput(false);
            return;
        }

        if (!age.trim() || +age < 1) {
            console.log('Inalid age');
            setIsValidInput(false);
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
        setIsValidInput(true);
    }

    console.log(isValidInput);

    return (
        <div className="new-item">
            {!isValidInput && <ErrorModal title={'title'} message={'message'} onCloseError={onCloseErrorHandler}/>}
            <form className={styles['new-item-form']} action="" onSubmit={formSubmitHandler}>
                {/*<div className={styles['item-box']}>*/}
                <label htmlFor="name">Name</label>
                <input id='name' type='text' value={name} onChange={nameChangeHandler}></input>
                {/*</div>*/}
                {/*<div className={styles['item-box']}>*/}
                <label>Age</label>
                <input type='number' value={age} onChange={ageChangeHandler}></input>
                {/*</div>*/}
                <button type='submit'>Add new item</button>
            </form>
        </div>
    )
}

export default NewItem;