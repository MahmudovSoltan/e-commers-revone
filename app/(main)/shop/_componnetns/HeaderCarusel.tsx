'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
const categories = [
    {
        title: "Footwear",
        img_url: "https://revone-demo.myshopify.com/cdn/shop/files/sub-shoes.jpg?v=1739523648&width=320"
    },
    {
        title: "Kids",
        img_url: "https://revone-demo.myshopify.com/cdn/shop/files/sub-kiods.jpg?v=1739523648&width=320"
    },
    {
        title: "Deal Zone",
        img_url: "https://revone-demo.myshopify.com/cdn/shop/files/sub-deal.jpg?v=1739523648&width=320"
    },
    {
        title: "Accessories",
        img_url: "https://revone-demo.myshopify.com/cdn/shop/files/3_076a5647-c02e-41b2-b8b2-1b27ff0ef018.jpg?v=1727080741&width=740"
    },
    {
        title: "Women",
        img_url: "https://revone-demo.myshopify.com/cdn/shop/files/sub-women2.jpg?v=1739523644&width=320"
    }
    ,
    {
        title: "New Arrival",
        img_url: "https://revone-demo.myshopify.com/cdn/shop/files/sub-fashion.jpg?v=1739523648&width=320"
    },
    {
        title: "Men",
        img_url: "https://revone-demo.myshopify.com/cdn/shop/files/sub-men.jpg?v=1739523648&width=320"
    }

]
const HeaderCarusel = () => {
    return (
        <div className='headr-carusel_container'>
            <Swiper
                spaceBetween={20}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >

                {
                    categories.map((categorie, index) => (
                        <SwiperSlide key={index} className='swiper-card'>
                            <div className="swiper-image">
                                <Image
                                    width={180}
                                    height={180}
                                    alt={categorie.title}
                                    src={categorie.img_url}
                                />
                            </div>
                            <h4 className='categories_title'>
                                {categorie.title}
                            </h4>

                        </SwiperSlide>

                    ))
                }

            </Swiper>
        </div>
    )
}

export default HeaderCarusel