import Logo from "@/app/components/logo"
import { FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io5"
import { RiYoutubeFill } from "react-icons/ri"

const FooterLeft = () => {
    return (
        <div>
            <Logo />
            <div className="footerleft_top">
                At <span>AdornThemes</span>, we design and provide elegant and highly functional Shopify themes, backed by exceptional support
            </div>
            <div className="footer_touch">
                Keep in touch
            </div>
            <div className="footer_social-icons">
                <div className="social-icon">
                    <FaFacebookF color="#FFF" size={13} />
                </div>
                <div className="social-icon">
                    <FaXTwitter color="#FFF" size={13} />
                </div>
                <div className="social-icon">
                    <IoLogoInstagram  color="#FFF" size={13} />
                </div>
                <div className="social-icon">
                    <RiYoutubeFill  color="#FFF" size={13} />
                </div>
            </div>

        </div>
    )
}

export default FooterLeft
