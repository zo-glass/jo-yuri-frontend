import styles from './Day.module.css'

export default function Day({ day, month, year, timezone = 'UTC', event = false }) {
    const d = new Date();
    const today = Number(d.toLocaleString('en-US', { day: 'numeric', timeZone: timezone }));
    const currentMonth = Number(d.toLocaleString('en-US', { month: 'numeric', timeZone: timezone })) - 1;
    const currentYear = Number(d.toLocaleString('en-US', { year: 'numeric', timeZone: timezone }));

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
