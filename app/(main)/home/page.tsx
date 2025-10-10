import Hero from '@/app/(main)/home/_section/Hero'
import './home.css'
import MarqueeComponent from '@/app/components/marquee'
import TopCategories from '@/app/(main)/home/_section/TopCategories'
import PopularProducts from '@/app/(main)/home/_section/PopularProducts'
import ExploreMore from '@/app/(main)/home/_section/ExploreMore'
import PopularCollection from '@/app/(main)/home/_section/PopularCollection'
import Faqs from '@/app/(main)/home/_section/Faqs'

const HomePage = () => {
  return (
    <section className='home-page'>
      <Hero />
      <MarqueeComponent />
      <TopCategories />
      <PopularProducts />
      <ExploreMore />
      <PopularCollection />
      <Faqs />
    </section>
  )
}

export default HomePage
