import styles from './MusicCard.module.css'

import { FaSpotify } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'

export default function MusicCard({ item }) {
    return (
        <>
            <div className={styles.container}>
                <img src={item.src} alt={item.alt} className={styles.image} />
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <p className={styles.text}><strong>{item.title}</strong></p>
                        <p className={styles.text}>{item.date} - {item.type}</p>
                    </div>
                    <div className={styles.iconContainer}>
                        {item.spotify &&
                            <a href={item.spotify} target='_blank' rel='noopener noreferrer'>
                                <FaSpotify className={styles.icon} />
                            </a>}
                        {item.appleMusic &&
                            <a href={item.appleMusic} target='_blank' rel='noopener noreferrer'>
                                <SiApplemusic className={styles.icon} />
                            </a>}
                    </div>
                </div>
            </div>
        </>
    )
}
