import styles from './page.module.css'

import Calendar from '@/components/features/Calendar/Calendar'
import CalendarList from '@/components/features/Calendar/CalendarList'

import { fetchData } from '@/common/dataFetcher'

export default async function Schedule({ searchParams }) {
    const { year = new Date().getFullYear(), month = (new Date().getMonth()+1) } = await searchParams

    const { items } = await fetchData('schedule', { year: year, month: month})

    items?.sort((a, b) => b.start - a.start)

    return (
        <>
            <div className={styles.container}>
                <h1>Schedule</h1>
                <Calendar month={month-1} year={year} items={items} nav={true} />
                <CalendarList items={items} />
            </div>
        </>
    )
}
