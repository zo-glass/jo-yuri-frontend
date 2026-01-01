import styles from './Day.module.css'

export default function Day({ day, month, year, event=false }) {
    const d = new Date()
    const today = d.getDate()
    const currentMonth = d.getMonth()
    const currentYear = d.getFullYear()
    
    return (
        <>
            <div className={styles.container}>
                <div className={`
                    ${styles.day}
                    ${day === today && currentMonth === month && currentYear === year ? styles.today : ''}
                `}>{day}</div>
                <div className={`
                    ${styles.event}
                    ${event ? styles.active : ''}
                `}></div>
            </div>
        </>
    )
}
