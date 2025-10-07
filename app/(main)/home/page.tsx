import Hero from '@/app/(main)/home/_section/Hero'
import './home.css'
import MarqueeComponent from '@/app/components/marquee'
import TopCategories from '@/app/(main)/home/_section/TopCategories'
import PopularProducts from '@/app/(main)/home/_section/PopularProducts'

const HomePage = () => {
  return (
    <section className='home-page'>
      <Hero />
      <MarqueeComponent />
      <TopCategories />
      <PopularProducts />
    </section>
  )
}

export default HomePage
