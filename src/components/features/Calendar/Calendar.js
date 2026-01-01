import styles from './Calendar.module.css'

import Day from './Day'

import Link from 'next/link'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

export default function Calendar({ year, month, timezone = 'UTC', items, nav = false }) {

    year = parseInt(year)
    month = parseInt(month)

    const firstDay = (new Date(year, month)).getDay()
    const daysInMonth = 32 - new Date(year, month, 32).getDate()
    let day = 1

    const itemsLookUp = items?.reduce((acc, item) => {
        const day = parseInt(
            new Intl.DateTimeFormat('en-US', { day: 'numeric', timeZone: timezone }).format(new Date(item?.start))
        )
        acc[day] = true
        return acc
    }, {}) ?? {}

    return (
        <>
            <div className={styles.container}>
                <CalendarHead year={year} month={month} nav={nav} />
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                <th key={index} className={styles.weekDay}>{day}</th>
                            ))}
                        </tr>
                    </thead>
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
                                                    <Day day={day++} month={(month)} year={year} timezone={timezone} event={itemsLookUp[day - 1] ? true : false} />
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

function CalendarHead({ year, month, nav = false }) {
    const months = Array.from({ length: 12 }, (_, i) =>
        new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month))
    )

    return (
        <>
            <div className={styles.nav}>
                {nav && <Link href={`?year=${month === 0 ? year - 1 : year}&month=${month === 0 ? (12) : (month + 1) - 1}`} className={`${styles.chevron}`}>
                    <VscChevronLeft />
                </Link>}
                <h1 className={styles.title}>{`${year} ${months[month]}`} </h1>
                {nav && <Link href={`?year=${month === 11 ? year + 1 : year}&month=${month === 11 ? (1) : (month + 1) + 1}`} className={`${styles.chevron}`}>
                    <VscChevronRight />
                </Link>}
            </div>
        </>
    )
}
