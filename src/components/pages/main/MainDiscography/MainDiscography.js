import styles from './MainDiscography.module.css'

import MusicCard from '@/components/cards/MusicCard/MusicCard'
import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import Button from '@/components/ui/Button/Button'

export default function MainDiscography({ items }) {

	const first = items.slice(0, 2)
	const second = items.slice(2)

	return (
		<>
			<div className={styles.container}>
				<h1>Discography</h1>
				<GridWrapper columns={2} mobileColumns={1}>
					{first.map((item, index) => (
						<MusicCard key={index} item={item} />
					))}
				</GridWrapper>
				<div className={styles.hideMobile}>
					<GridWrapper columns={2} mobileColumns={1}>
						{second.map((item, index) => (
							<MusicCard key={index} item={item} />
						))}
					</GridWrapper>
				</div>
				<div className={styles.button}>
					<Button path='/discography'>See More</Button>
				</div>
			</div>
		</>
	)
}
