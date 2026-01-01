import styles from './NewsCard.module.css'

export default function NewsCard({ item }) {
    return (
        <>
            <a href={item.href} target='_blank' rel='noopener noreferrer' className={styles.border}>
                <div className={styles.container}>
                    <div className={styles.contentContainer}>
                        <p className={styles.title}><strong>{item.title}</strong></p>
                        <p>{`${item.origin} - ${item.date}`}</p>
                    </div>
                    {item.src && <img src={item.src} alt={item.alt} className={styles.image} />}
                </div >
            </a>
        </>
    )
}
