import styles from './CalendarList.module.css'

export default function CalendarList({ items, day = null }) {
    const days = items.reduce((acc, item) => {
        const day = new Date(item?.start).getDate()
        if (!acc[day]) acc[day] = []
        acc[day].push(item)
        return acc
    }, {})

    return (
        <>
            <div className={styles.container}>
                {Object.entries(days).map(([date, items]) => (
                    <DayList key={date} date={date} items={items} />
                ))}
            </div>
        </>
    )
}

function DayList({ date, items }) {
    return (
        <>
            <div className={styles.dayContainer}>
                <h1 className={styles.heading}>{`Day ${date}`}</h1>
                {items.map((item) => (
                    <div key={item.id} className={styles.itemContainer}>
                    {item.href ?
                        <a href={item.href} target='_blank' rel='noopener noreferrer' className={styles.item}>
                            <ItemList item={item} />
                        </a>
                    :
                        <ItemList item={item} />
                    }
                    </div>
            
                ))}
            </div >
        </>
    )
}

function ItemList({ item }) {
    return (
        <>
            <div className={styles.contentContainer}>
                <strong>{item.title}</strong>
                <p>{item.subTitle}</p>
            </div>
            <p>{item?.allDay ?
                'All Day'
                :
                new Date(item?.start).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }</p>
        </>
    )
}
