import styles from './MainNews.module.css'

import NewsCard from '@/components/cards/NewsCard/NewsCard'
import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import Button from '@/components/ui/Button/Button'

export default function MainNews({ items }) {
    return (
        <>
            <div className={styles.container}>
                <h1>News</h1>
                <GridWrapper columns={1} mobileColumns={1} customPadding="2vw">
                    {items.map((item, index) => (
                        <NewsCard key={index} item={item} />
                    ))}
                </GridWrapper>
                <div className={styles.button}>
					<Button path='/news'>See More</Button>
				</div>
            </div>
        </>
    )
}
