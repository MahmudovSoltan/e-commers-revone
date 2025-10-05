import Hero from '@/app/(main)/home/_section/Hero'
import './home.css'
import MarqueeComponent from '@/app/components/marquee'
import TopCategories from '@/app/(main)/home/_section/TopCategories'

const HomePage = () => {
  return (
    <section className='home-page'>
      <Hero />
      <MarqueeComponent />
      <TopCategories />

    </section>
  )
}

export default HomePage
