import styles from "./page.module.css"

export const metadata = {
    title: "Jo Yuri - Profile",
    description: "About Jo Yuri",
    keywords: [
        "Yuri",
        "Jo Yuri",
        "조유리",
        "Jo Yuri Profile",
    ],
    openGraph: {
        title: "Jo Yuri - Profile",
        description: "About Jo Yuri",
    },
}

export default function Profile() {
    return (
        <>
            <div className={styles.container}>
                <img src={"/assets/profile.jpg"} alt="Profile" className={styles.profileImage} />
                <h1>Jo Yuri</h1>
                <p>&emsp;Jo Yuri is a South Korean singer and actress recognized for a multifaceted career spanning music and screen performance. Born on October 22, 2001, in Busan, South Korea, she rose to public prominence through her participation in Mnet's competition series Produce 48, in which she placed third and subsequently debuted in October 2018 as a member of the girl group Iz*One. Following the group's disbandment in 2021, she launched a solo career under WakeOne Entertainment with the release of her debut single album, Glassy, which received Rookie of the Year nominations at several of South Korea's most prominent award ceremonies, including the Golden Disc Awards, the Mnet Asian Music Awards, and the Seoul Music Awards.</p>
                <p>&emsp;Since her solo debut, Jo Yuri has released a consistent body of work, including the extended plays Op.22 Y-Waltz: in Major, Love All, and Episode 25, along with singles such as "Love Shhh!," "Taxi," and "Growls and Purrs." Her artistry extends beyond performance into songwriting, as demonstrated by her contribution as co-writer and composer of "Someday," a track featured on Iz*One's studio album Bloom*Iz. She has additionally contributed vocals to a number of television soundtracks throughout her career, reflecting a sustained and versatile presence within the Korean entertainment industry.</p>
                <p>&emsp;In parallel with her musical activities, Jo Yuri has established herself as an accomplished actress. She made her acting debut in the web series Mimicus in 2022 and subsequently gained significant international recognition for her portrayal of Kim Jun-hee (Player 222) in the second and third seasons of Netflix's Squid Game, a performance widely acknowledged for its emotional nuance. She has since been cast in several notable upcoming productions, including the Netflix series Variety and the television drama Love Virus, further establishing her standing as a serious dramatic performer.</p>
                <p>&emsp;Characterized by her agency as an artist who moves seamlessly between music and acting, Jo Yuri continues to distinguish herself through range and consistency across both disciplines. With an expanding portfolio in K-pop and television, she stands as one of the most versatile and accomplished figures among her generation of Korean idols-turned-actors.</p>
            </div>
        </>
    )
}
