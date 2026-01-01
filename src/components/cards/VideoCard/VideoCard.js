import styles from './VideoCard.module.css'

export default function VideoCard({ item }) {
    return (
        <>
            <div className={styles.container}>
                <a href={item.href} className={styles.imageContainer} target='_blank' rel='noopener noreferrer'>
                    <img src={item.src} alt={item.alt} className={styles.image} />
                    <p className={styles.title}><strong>{item.title}</strong></p>
                </a>
                
            </div>
        </>
    )
}
