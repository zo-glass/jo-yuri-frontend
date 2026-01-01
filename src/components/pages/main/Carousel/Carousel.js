'use client'

import styles from './Carousel.module.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Carousel({ items }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel]}
                mousewheel={{ forceToAxis: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: `.${styles.prev}`,
                    nextEl: `.${styles.next}`,
                }}
                pagination={true}
                className={styles.swiper}
            >
                {items?.map((i, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <a href={i.href} target='_blank' rel='noopener noreferrer'>
                                <div className={styles.container}>
                                    <img src={i.src} alt={i.alt} className={styles.image} />
                                    <div className={`${styles.textContainer} ${i.isDarkText ? styles.darkText : styles.lightText}`}>
                                        {i.title && <h1 className={styles.title}>{i.title}</h1>}
                                        {i.subTitle && <h2 className={styles.subTitle}>{i.subTitle}</h2>}
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    )
                })}
                <IoIosArrowDropleftCircle className={`${styles.navButton} ${styles.prev}`} />
                <IoIosArrowDroprightCircle className={`${styles.navButton} ${styles.next}`} />
            </Swiper>
        </>
    )
}
