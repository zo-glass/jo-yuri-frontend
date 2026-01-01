'use client'

import styles from './Pagination.module.css'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

export default function Pagination({ totalPages }) {
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const prevPage = currentPage === 1 ? 1 : currentPage - 1
    const nextPage = currentPage === totalPages? totalPages : currentPage + 1

    return (
        <>
            <div className={styles.container}>
                <Link href={`?page=${prevPage}`} className={`${styles.chevron} ${currentPage === 1 ? styles.disabled : ''}`}>
                    <VscChevronLeft />
                </Link>
                <div className={styles.pages}>
                    <span className={styles.currentPage}>{currentPage}</span>
                    <span className={styles.totalPages}>of {totalPages}</span>
                </div>
                <Link href={`?page=${nextPage}`} className={`${styles.chevron} ${currentPage === totalPages ? styles.disabled : ''}`}>
                    <VscChevronRight />
                </Link>
            </div>
        </>
    )
}
