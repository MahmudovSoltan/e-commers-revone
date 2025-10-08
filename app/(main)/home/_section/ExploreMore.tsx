import CheckIcon from '@/app/assets/icons/CheckIcon'
import FolderIcon from '@/app/assets/icons/FolderIcon'
import TrunckIcon from '@/app/assets/icons/TrunckIcon'
import Image from 'next/image'

const ExploreMore = () => {

    return (
        <div>

            <div className='explore-more_container'>
                <div>
                    <button className='explore_btn'>EXPLORE MORE</button>
                </div>
                <div className='explore-more_items'>
                    <div className='explore-more_item'>
                        <TrunckIcon />
                        <div>
                            <h3 className='explore-more_title'>
                                FREE SHIPPING & RETURN
                            </h3>
                            <p className='explore-more_text'>
                                We offer Free Shipping on order over $99 and Easy Returns at no extra cost
                            </p>
                        </div>
                    </div>
                    <div className='explore-more_item'>
                        <CheckIcon />
                        <div>
                            <h3 className='explore-more_title'>
                                AUTHENTIC PRODUCTS
                            </h3>
                            <p className='explore-more_text'>
                                We provide only 100% authentic products, directly from trusted manufacturers
                            </p>
                        </div>
                    </div>
                    <div className='explore-more_item'>
                        <FolderIcon />
                        <div>
                            <h3 className='explore-more_title'>
                                SHIPPING ACROSS US
                            </h3>
                            <p className='explore-more_text'>
                                Confirmed orders are dispatched within 24 hours to ensure quick and reliable delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='explore-grid'>
                <div className='explore-grid_item'>
                    <Image
                        src={"https://revonedemo.myshopify.com/cdn/shop/files/liquide-vape.jpg?v=1756387052&width=900"}
                        width={713}
                        height={463}
                        alt='grid-left-image'
                    />
                </div>
                <div className='explore-grid_item grid-content'>
                    <div className="discount_number">50% OFF</div>
                    <h3 className='explore-grid_title'>
                        E-LIQUIDS & VAPE JUICE DAILY DEALS
                    </h3>
                    <p className="explore-grid_text">
                        Experience a unique vaping adventure with Revone, as we honor the craft of vaping with our wide range of high-quality vape juices. Designed to cater to the different tastes and choices of vapers, our collection reflects our commitment to excellence.
                    </p>
                    <div>
                        <button className="explore_btn">
                            SHOP NOW
                        </button>
                    </div>
                </div>

                <div className='explore-grid_item grid-content'>
                    <h3 className='explore-grid_title'>
                        DISPOSABLE VAPE DAILY DEALS
                    </h3>
                    <p className="explore-grid_text">
                        Explore the vast realm of convenience and taste with Revone`s carefully selected range of disposable vapes. As the premier destination for the vaping community to find the most innovative and effortless vaping solutions
                    </p>
                    <div>
                        <button className="explore_btn">
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className='explore-grid_item'>
                    <Image
                        src={"https://revonedemo.myshopify.com/cdn/shop/files/dis-vape.jpg?v=1756387642&width=900"}
                        width={713}
                        height={463}
                        alt='grid-right-image'
                    />
                </div>

            </div>
            <div className='explore-more_bottom'>
                <div>
                    <Image
                        src={"https://revonedemo.myshopify.com/cdn/shop/files/vape-store.jpg?v=1756462779&width=900"}
                        width={685}
                        height={485}
                        alt='image-xxx'
                    />
                </div>
                <div className="explore-more_bottom_left">
                    <h3 className='bottom_left-title'>
                        WE ARE THE BEST VAPE STORE IN THE TOWN
                    </h3>
                    <p className="bottom_left-text">
                        We’re more than just a store; we’re a trusted name in the local vape community, building long-term relationships with our customers.
                    </p>
                    <ul className='bottom_lists'>
                        <li className="bottom_list">
                            <CheckIcon size={"20"} />
                            <p>
                                Best Product Quality
                            </p>
                        </li>
                        <li className="bottom_list"><CheckIcon size={"20"} />
                            <p>
                                Wide Range of Choices</p></li>
                        <li className="bottom_list"><CheckIcon size={"20"} />
                            <p>Expert Guidance</p>
                        </li>
                        <li className="bottom_list"><CheckIcon size={"20"} />
                            <p>Authentic Products Only</p>
                        </li>
                        <li className="bottom_list"><CheckIcon size={"20"} />
                            <p>Exceptional Service</p>
                        </li>
                        <li className="bottom_list"><CheckIcon size={"20"} />
                            <p>Community & Trust</p>
                        </li>
                    </ul>
                    <button className="explore_btn">
                     Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExploreMore