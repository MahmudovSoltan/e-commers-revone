import HeaderLeft from "@/app/components/header/_components/HeaderLeft"
import HeaderNavbar from "@/app/components/header/_components/HeaderNavbar"

import Logo from "@/app/components/logo"

const HeaderNavigation = () => {
    return (
        <div className="header-navigation">
            <Logo />
            <HeaderNavbar />
            <HeaderLeft />
        </div>
    )
}

export default HeaderNavigation
