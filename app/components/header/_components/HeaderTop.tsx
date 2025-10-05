import { CiDeliveryTruck } from "react-icons/ci"
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5"

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="header-top__left">
                <div>
                    <IoLocationOutline size={15} color="#fff" />
                    Store Location
                </div>
                <div>
                    <IoTimeOutline size={15} color="#fff" />
                    Opening : Mon - Fri : 11 AM - 10 PM
                </div>
            </div>
            <div className="header-top__right">
                <CiDeliveryTruck size={15} color="#fff" />
                Free shipping across US
            </div>
        </div>
    )
}

export default HeaderTop