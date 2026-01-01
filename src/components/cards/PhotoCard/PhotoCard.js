import styles from './PhotoCard.module.css'

export default function PhotoCard({ item }) {
    return (
        <>
            <div className={styles.container}>
                <a href={item.href} className={styles.imageContainer}>
                    <img src={item.src} alt={item.alt} className={styles.image} />
                </a>
            </div>
        </>
    )
}
