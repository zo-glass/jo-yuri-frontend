import styles from './Day.module.css'

export default function Day({ day }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.day}>{day}</div>
            </div>
        </>
    )
}
