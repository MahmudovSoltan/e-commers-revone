import Image from 'next/image'
import React from 'react'

const PopularCollection = () => {
    return (
        <div className='pupular-collection-container'>
            <div className="popular-collection_top">
                <h3>
                    Popular Collections
                </h3>
                <p>
                    Describe your products,collection, content etc...
                </p>
            </div>
            <div className="popularcollection-grid">
                <div className="grid-card">
                    <div>
                        <Image
                            src={"https://revonedemo.myshopify.com/cdn/shop/files/vap-Starter-kit.jpg?v=1756483236&width=400"}
                            width={320}
                            height={350}
                            alt='card-image-one'
                        />
                    </div>
                    <div className="card_bottom">
                        <h4 className="card_title">
                            Starter Kit
                        </h4>
                        <p className="card_text">
                            Step into the world of vaping with our all-in-one Starter Kit, perfect for beginners and casual users.
                        </p>
                        <button className="crad_btn">
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className="grid-card">
                    <div>
                        <Image
                            src={"https://revonedemo.myshopify.com/cdn/shop/files/vape-device.jpg?v=1756483255&width=400"}
                            width={320}
                            height={350}
                            alt='card-image-one'
                        />
                    </div>
                    <div className="card_bottom">
                        <h4 className="card_title">
                            Devices
                        </h4>
                        <p className="card_text">
                            All our vape devices are authentic, reliable, and crafted for the best flavor and satisfaction.
                        </p>
                        <button className="crad_btn">
                            EXPLORE NOW
                        </button>
                    </div>
                </div>
                <div className="grid-card">
                    <div>
                        <Image
                            src={"https://revonedemo.myshopify.com/cdn/shop/files/e-juice.jpg?v=1756483406&width=400"}
                            width={320}
                            height={350}
                            alt='card-image-one'
                        />
                    </div>
                    <div className="card_bottom">
                        <h4 className="card_title">
                            E-Juice
                        </h4>
                        <p className="card_text">
                            Our E-Juice ensures a customized vaping experience that suits both beginners and seasoned vapers.
                        </p>
                        <button className="crad_btn">
                            EXPLORE NOW
                        </button>
                    </div>
                </div>
                <div className="grid-card">
                    <div>
                        <Image
                            src={"https://revonedemo.myshopify.com/cdn/shop/files/vape-accessories.jpg?v=1756483273&width=400"}
                            width={320}
                            height={350}
                            alt='card-image-one'
                        />
                    </div>
                    <div className="card_bottom">
                        <h4 className="card_title">
                            Accessories
                        </h4>
                        <p className="card_text">
                            Authentic, durable accessories to keep your vape running with enhanced performance and flavor
                        </p>
                        <button className="crad_btn">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCollection
