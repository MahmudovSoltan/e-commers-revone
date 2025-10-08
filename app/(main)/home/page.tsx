import Hero from '@/app/(main)/home/_section/Hero'
import './home.css'
import MarqueeComponent from '@/app/components/marquee'
import TopCategories from '@/app/(main)/home/_section/TopCategories'
import PopularProducts from '@/app/(main)/home/_section/PopularProducts'
import ExploreMore from '@/app/(main)/home/_section/ExploreMore'

const HomePage = () => {
  return (
    <section className='home-page'>
      <Hero />
      <MarqueeComponent />
      <TopCategories />
      <PopularProducts />
      <ExploreMore />
    </section>
  )
}

export default HomePage
