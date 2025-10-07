import Marquee from "react-fast-marquee";
import "./marquee.css"
const MarqueeComponent = () => {
    return (
        <div>
            <Marquee speed={50} gradient={false}>
                <div  className="marquee">

                <svg className="at-icon" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m21.137 11.519-2.726-.779a7.453 7.453 0 0 1 -5.151-5.151l-.779-2.726a.52.52 0 0 0 -.962 0l-.779 2.726a7.453 7.453 0 0 1 -5.151 5.151l-2.726.779a.5.5 0 0 0 0 .962l2.726.779a7.453 7.453 0 0 1 5.151 5.151l.779 2.726a.5.5 0 0 0 .962 0l.779-2.726a7.453 7.453 0 0 1 5.151-5.151l2.726-.779a.5.5 0 0 0 0-.962z" fill="#00a7ce">
                </path></svg>
                <div>Take advantage of our green Sunday promotion!</div>
                <svg className="at-icon" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m21.137 11.519-2.726-.779a7.453 7.453 0 0 1 -5.151-5.151l-.779-2.726a.52.52 0 0 0 -.962 0l-.779 2.726a7.453 7.453 0 0 1 -5.151 5.151l-2.726.779a.5.5 0 0 0 0 .962l2.726.779a7.453 7.453 0 0 1 5.151 5.151l.779 2.726a.5.5 0 0 0 .962 0l.779-2.726a7.453 7.453 0 0 1 5.151-5.151l2.726-.779a.5.5 0 0 0 0-.962z" fill="#00a7ce">
                </path></svg>
                <div>Free shipping on order over $99</div> {" "}
                <svg className="at-icon" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m21.137 11.519-2.726-.779a7.453 7.453 0 0 1 -5.151-5.151l-.779-2.726a.52.52 0 0 0 -.962 0l-.779 2.726a7.453 7.453 0 0 1 -5.151 5.151l-2.726.779a.5.5 0 0 0 0 .962l2.726.779a7.453 7.453 0 0 1 5.151 5.151l.779 2.726a.5.5 0 0 0 .962 0l.779-2.726a7.453 7.453 0 0 1 5.151-5.151l2.726-.779a.5.5 0 0 0 0-.962z" fill="#00a7ce">
                </path></svg>
                <div style={{marginRight: "30px"}}>
                    Purchase 5 packs of coils, pods, or juices and receive 1 juice for free</div>
                    
                </div>
            </Marquee>
        </div>
    )
}

export default MarqueeComponent

