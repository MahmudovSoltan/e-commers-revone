import HeaderNavigation from '@/app/components/header/_components/HeaderNavigation'
import HeaderTop from '@/app/components/header/_components/HeaderTop'
import './header.css'

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderNavigation />
        </header>
    )
}

export default Header
