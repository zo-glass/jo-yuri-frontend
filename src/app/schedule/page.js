import styles from './page.module.css'
import { headers } from 'next/headers'

import Calendar from '@/components/features/Calendar/Calendar'
import CalendarList from '@/components/features/Calendar/CalendarList'

import { fetchData } from '@/common/dataFetcher'
import { getMonthRange } from '@/common/dateService'

export const metadata = {
    title: "Jo Yuri - Schedule",
    description: "Jo Yuri Events",
    keywords: [
        "Yuri",
        "Jo Yuri",
        "조유리",
        "Jo Yuri Schedule",
    ],
    openGraph: {
        title: "Jo Yuri - Schedule",
        description: "Jo Yuri Events",
    },
}

export default async function Schedule({ searchParams }) {
    const timezone = (await headers()).get('x-timezone') || 'UTC'

    const d = new Date()
    const currentYear = new Intl.DateTimeFormat('en-US', { year: 'numeric', timeZone: timezone }).format(d)
    const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: timezone }).format(d)

    const { year = currentYear, month = currentMonth } = await searchParams

    const { start, end } = getMonthRange(Number(year), Number(month))

    const { items } = await fetchData('schedule', { start: start, end: end, tz: timezone })

    items?.sort((a, b) => b.start - a.start)

    return (
        <>
            <div className={styles.container}>
                <h1>Schedule</h1>
                <Calendar year={year} month={month - 1} items={items} timezone={timezone} nav={true} />
                <CalendarList items={items} timezone={timezone} />
            </div>
        </>
    )
}
