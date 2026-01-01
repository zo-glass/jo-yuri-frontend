import styles from './MainGallery.module.css'

import PhotoCard from '@/components/cards/PhotoCard/PhotoCard'
import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import Button from '@/components/ui/Button/Button'

export default function MainGallery({ items }) {

	const first = items.slice(0, 3)
	const second = items.slice(3)

	return (
		<>
			<div className={styles.container}>
				<h1>Gallery</h1>
				<GridWrapper columns={3} mobileColumns={1}>
					{first.map((item, index) => (
						<PhotoCard key={index} item={item} />
					))}
				</GridWrapper>
				<div className={styles.hideMobile}>
					<GridWrapper columns={3} mobileColumns={1}>
						{second.map((item, index) => (
							<PhotoCard key={index} item={item} />
						))}
					</GridWrapper>
				</div>
				<div className={styles.button}>
					<Button path='/gallery'>See More</Button>
				</div>
			</div>
		</>
	)
}
