import ProductCard from '@/app/components/card/ProductCard'
import Products from '../../../../products.json'

const PopularProducts = () => {
    return (
        < div className='popular-products-section'>
            <div>
                <h3 className='top-categories__title'>
                    TOP CATEGORIES
                </h3>
                <p className='top-categories__text'>
                    Best Selling Disposable Vape
                </p>
            </div>
            <div className='popular-products '>

                {Products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </ div>
    )
}

export default PopularProducts
