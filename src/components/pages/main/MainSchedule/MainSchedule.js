import styles from './MainSchedule.module.css'

import Calendar from '@/components/features/Calendar/Calendar'
import Button from '@/components/ui/Button/Button'

export default function MainSchedule({ items, timezone }) {
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth()

    return (
        <>
            <div className={styles.container}>
                <h1>Schedule</h1>
                <Calendar year={year} month={month} timezone={timezone} items={items}/>
                <div className={styles.button}>
                    <Button path='/schedule'>See More</Button>
                </div>
            </div>
        </>
    )
}
