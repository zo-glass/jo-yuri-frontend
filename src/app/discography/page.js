import styles from './page.module.css'
import { notFound } from 'next/navigation'

import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import MusicCard from '@/components/cards/MusicCard/MusicCard'
import Pagination from '@/components/ui/Pagination/Pagination'

import { fetchPaginatedData } from '@/common/dataFetcher'

const ITEMS_PER_PAGE = (2) * 2

export default async function Discography({ searchParams }) {
    const { page = 1 } = await searchParams

    const { items, totalPages } = await fetchPaginatedData('discography', page, ITEMS_PER_PAGE, Number(process.env.REVALIDATE_TIME_LONG))

    items?.sort((a, b) => b.createdAt - a.createdAt)

    if (items.length === 0) {
        notFound()
    }

    return (
        <>
            <h1>Discography</h1>
            <GridWrapper columns={2} mobileColumns={1}>
                {items?.map((item, index) => (
                    <MusicCard key={index} item={item} />
                ))}
            </GridWrapper>
            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}
