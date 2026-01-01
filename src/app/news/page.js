import styles from './page.module.css'

import { notFound } from 'next/navigation'
import { fetchMoreData } from '@/common/dataFetcher'

import LoadMore from './LoadMore'

const ITEMS_PER_PAGE = (1) * 6

export default async function News() {
    const { items, nextToken } = await fetchMoreData('news', null, ITEMS_PER_PAGE, Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME_SORT))

    items?.sort((a, b) => b.createdAt - a.createdAt)

    if (items.length === 0) {
        notFound()
    }

    return (
        <>
            <div className={styles.container}>
                <h1>News</h1>
                <LoadMore initialItems={items} nextToken = {nextToken} size = {ITEMS_PER_PAGE} />
            </div>
        </>
    )
}
