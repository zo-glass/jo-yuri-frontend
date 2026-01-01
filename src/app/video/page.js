'use client'

import { useState, useEffect } from 'react'

import styles from './page.module.css'

import { notFound } from 'next/navigation'
import { fetchMoreData } from '@/common/dataFetcher'

import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import VideoCard from '@/components/cards/VideoCard/VideoCard'
import Button from '@/components/ui/Button/Button'

const ITEMS_PER_PAGE = (2) * 4

export default function Video() {
    const [items, setItems] = useState([])
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const init = async () => {
            setLoading(true)
            const { items, nextToken } = await fetchMoreData('video', null, ITEMS_PER_PAGE + 1, Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME_SORT))

            items?.sort((a, b) => b.createdAt - a.createdAt)

            setItems(items)
            setToken(nextToken)
            setLoading(false)
        }
        init()
    }, [])

    const loadMore = async () => {
        setLoading(true)
        const { items, nextToken } = await fetchMoreData('video', token, ITEMS_PER_PAGE, Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME_SORT))

        items?.sort((a, b) => b.createdAt - a.createdAt)

        setItems((prev) => [...prev, ...items])
        setToken(nextToken)
        setLoading(false)
    }

    if (!loading && items.length === 0) {
        notFound()
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Video</h1>
                <div className={styles.video}>
                    <iframe src={`https://www.youtube.com/embed/${items[0]?.youtubeId}`} title={items[0]?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <GridWrapper columns={2} mobileColumns={1}>
                    {items.slice(1).map((item, index) => (
                        <VideoCard key={index} item={item} />
                    ))}
                </GridWrapper>
                {token && <div className={styles.loadMore}>
                    <Button onClick={loadMore}>{loading ? 'Loading...' : 'Load More'}</Button>
                </div>}
            </div>
        </>
    )
}
