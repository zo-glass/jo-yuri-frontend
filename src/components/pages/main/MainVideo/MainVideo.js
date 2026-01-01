import styles from './MainVideo.module.css'

import VideoCard from '@/components/cards/VideoCard/VideoCard'
import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import Button from '@/components/ui/Button/Button'

export default function MainVideo({ items }) {

	const [first, second, third] = items

	return (
		<>
			<div className={styles.container}>
				<h1>Video</h1>
				{first && <div className={styles.video}>
					<iframe src={`https://www.youtube.com/embed/${first?.youtubeId}`} title={first?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
				</div>}
				<GridWrapper columns={2} mobileColumns={1}>
					{second && <VideoCard key={1} item={second} />}
					<div className={styles.hideMobile}>
						{third && <VideoCard key={2} item={third} />}
					</div>
				</GridWrapper>
				<div className={styles.button}>
					<Button path='/video'>See More</Button>
				</div>
			</div>
		</>
	)
}
