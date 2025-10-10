
const FooterRight = () => {
    return (
        <div>
            <h4 className="footer_avarage_titile">
                Information
            </h4>
            <p className="footer_right-text">
                Enter your email to receive daily news and get 20% off coupon for all items.
            </p>
            <div className="footer_input">
                <input type="text" placeholder="Email address" />
            </div>
             <div>
                <button className="footer_btn">Subscribe</button>
             </div>
        </div>
    )
}

export default FooterRight
