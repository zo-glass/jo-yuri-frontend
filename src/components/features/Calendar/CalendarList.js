import styles from './CalendarList.module.css'

export default function CalendarList({ items, timezone = 'UTC' }) {
    const days = items.reduce((acc, item) => {
        const day = parseInt(
            new Intl.DateTimeFormat('en-US', { day: 'numeric', timeZone: timezone }).format(new Date(item?.start))
        )
        if (!acc[day]) acc[day] = []
        acc[day].push(item)
        return acc
    }, {})

    return (
        <>
            <div className={styles.container}>
                {Object.entries(days).map(([date, items]) => (
                    <DayList key={date} date={date} timezone={timezone} items={items} />
                ))}
            </div>
        </>
    )
}

function DayList({ date, timezone = 'UTC', items }) {
    return (
        <>
            <div className={styles.dayContainer}>
                <h1 className={styles.heading}>{`Day ${date}`}</h1>
                {items.map((item) => (
                    <div key={item.id} className={styles.itemContainer}>
                        {item.href ?
                            <a href={item.href} target='_blank' rel='noopener noreferrer' className={styles.item}>
                                <ListItem item={item} timezone={timezone} />
                            </a>
                        :
                            <ListItem item={item} timezone={timezone} />
                        }
                    </div>
                ))}
            </div >
        </>
    )
}

function ListItem({ item, timezone = 'UTC' }) {
    return (
        <>
            <div className={styles.contentContainer}>
                <strong>{item.title}</strong>
                <p>{item.subTitle}</p>
            </div>
            <p>{item?.allDay ?
                'All Day'
                :
                new Date(item?.start).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: timezone
                })
            }</p>
        </>
    )
}
