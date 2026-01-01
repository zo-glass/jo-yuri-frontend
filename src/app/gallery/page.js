import styles from './page.module.css'
import { notFound } from 'next/navigation'

import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import PhotoCard from '@/components/cards/PhotoCard/PhotoCard'
import Pagination from '@/components/ui/Pagination/Pagination'

import { fetchPaginatedData } from '@/common/dataFetcher'

const ITEMS_PER_PAGE = (3) * 4

export default async function Gallery({ searchParams }) {
    const { page = 1 } = await searchParams

    const { items, totalPages } = await fetchPaginatedData('gallery', page, ITEMS_PER_PAGE, Number(process.env.REVALIDATE_TIME_LONG))

    items?.sort((a, b) => b.createdAt - a.createdAt)

    if (items.length === 0) {
        notFound()
    }

    return (
        <>
            <h1>Gallery</h1>
            <GridWrapper columns={3} mobileColumns={1}>
                {items?.map((item, index) => (
                    <PhotoCard key={index} item={item} />
                ))}
            </GridWrapper>
            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}
