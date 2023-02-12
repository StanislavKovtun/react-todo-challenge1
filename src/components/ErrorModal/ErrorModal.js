import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div
            className={styles.wrap}
            onClick={props.onCloseError}>
            <div
                className={styles.modal}
                onClick={e => e.stopPropagation()}>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
                <button onClick={props.onCloseError}>ok</button>
            </div>
        </div>
    )
}

export default ErrorModal;