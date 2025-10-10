import FooterLeft from '@/app/components/footer/_components/FooterLeft'
import './footer.css'
import FooterAvarage from '@/app/components/footer/_components/FooterAvarage'
import FooterRight from '@/app/components/footer/_components/FooterRight'
const Footer = () => {
  return (
    <footer className="footer_container">
      <FooterLeft />
      <FooterAvarage />
      <FooterRight />
    </footer>
  )
}

export default Footer
