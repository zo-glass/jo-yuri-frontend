'use client'

import { useState } from 'react'
import { fetchMoreData } from '@/common/dataFetcher'

import styles from './LoadMore.module.css'

import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import VideoCard from '@/components/cards/VideoCard/VideoCard'
import Button from '@/components/ui/Button/Button'

export default function LoadMore({ initialItems, nextToken, size }) {
    const [items, setItems] = useState(initialItems)
    const [token, setToken] = useState(nextToken)
    const [loading, setLoading] = useState(false)

    const loadMore = async () => {
        setLoading(true)
        const { items, nextToken } = await fetchMoreData('video', token, size, Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME_SHORT))

        items?.sort((a, b) => b.createdAt - a.createdAt)

        setItems((prev) => [...prev, ...items])
        setToken(nextToken)
        setLoading(false)
    }

    return (
        <>
            <GridWrapper columns={2} mobileColumns={1}>
                {items?.map((item, index) => (
                    <VideoCard key={index} item={item} />
                ))}
            </GridWrapper>
            {token && <div className={styles.loadMore}>
                <Button onClick={loadMore}>{loading ? 'Loading...' : 'Load More'}</Button>
            </div>}
        </>
    )
}
