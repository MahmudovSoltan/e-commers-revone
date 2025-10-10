"use client"
import data from '../../../../categories.json'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
const TopCategories = () => {
    return (
        <div className='top-categories'>
            <div>
                <h3 className='top-categories__title'>
                    TOP CATEGORIES
                </h3>
                <p className='top-categories__text'>
                    Best Selling Disposable Vape
                </p>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >


                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} >

                            <div className='top-categories__item'>
                            
                                <img src={item.image_url} alt={item.titile} />
                                <h3>{item.titile}</h3>
                            </div>
                        </SwiperSlide>

                    ))
                }
                ...
            </Swiper>


        </div>
    )
}

export default TopCategories
