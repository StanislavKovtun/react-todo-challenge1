import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div
            className={styles.wrap}
            onClick={props.onCloseError}>
            <div
                className={styles.modal}
                onClick={e => e.stopPropagation()}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.message}>{props.message}</p>
                <button className={styles.close} onClick={props.onCloseError}>Close</button>
            </div>
        </div>
    )
}

export default ErrorModal;