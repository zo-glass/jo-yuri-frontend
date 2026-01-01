import styles from './page.module.css'
import { FaInstagram } from 'react-icons/fa'

const sns = [
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/_zoglass/',
    },
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/zo_glass/',
    },
]

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <h1>About</h1>
                <h2>About the Project</h2>
                <p>&emsp;That it's a Fan Site for supporting or appreciating a celebrity and isn't affiliated with the individual, brand, or organization.</p>
                <h2>About the Administrator</h2>
                <img src={process.env.NEXT_PUBLIC_ADMIN_PROFILE_IMAGE} alt="Profile" className={styles.profileImage} />
                <h3>余家豪</h3>
                <div className={styles.sns}>
                    {sns?.map((i, index) => {
                        return (
                            <a href={i.url} target='_blank' rel='noopener noreferrer' className={styles.snsItem} key={index}>
                                {i.icon}
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
