import styles from './page.module.css'

import { notFound } from 'next/navigation'
import { fetchMoreData } from '@/common/dataFetcher'

import LoadMore from './LoadMore'

const ITEMS_PER_PAGE = (2) * 4

export const metadata = {
    title: "Jo Yuri - Video",
    description: "Jo Yuri Videos",
    keywords: [
        "Yuri",
        "Jo Yuri",
        "조유리",
        "Jo Yuri Video",
    ],
    openGraph: {
        title: "Jo Yuri - Video",
        description: "Jo Yuri Videos",
    },
}

export default async function Video() {
    const { items, nextToken } = await fetchMoreData('video', null, ITEMS_PER_PAGE + 1, Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME_SORT))

    items?.sort((a, b) => b.createdAt - a.createdAt)

    if (items.length === 0) {
        notFound()
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Video</h1>
                <div className={styles.video}>
                    <iframe src={`https://www.youtube.com/embed/${items[0]?.youtubeId}`} title={items[0]?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <LoadMore initialItems={items?.slice(1)} nextToken={nextToken} size={ITEMS_PER_PAGE} />
            </div>
        </>
    )
}
