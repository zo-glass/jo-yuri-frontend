import styles from './Calendar.module.css'

import Day from './Day'

export default function Calendar({ year, month }) {
    year = parseInt(year)
    month = parseInt(month)

    const firstDay = (new Date(year, month)).getDay()
    const daysInMonth = 32 - new Date(year, month, 32).getDate()
    let day = 1

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title} >{`${year} - ${month + 1}`}</h1>
                <table className={styles.table}>
                    <tbody>
                        {Array(6).fill(null).map((i, ii) => {
                            return (
                                <tr className={styles.tr} key={ii}>
                                    {Array(7).fill(null).map((j, jj) => {
                                        return (
                                            <td className={styles.td} key={jj}>
                                                {(ii === 0 && jj < firstDay) ?
                                                    <></>
                                                : day < daysInMonth + 1 ?
                                                    <Day day={day++} />
                                                : <></>
                                                }
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
