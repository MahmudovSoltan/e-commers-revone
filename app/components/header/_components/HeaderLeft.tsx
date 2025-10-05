import { FaRegHeart, FaRegUser } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import { RiShoppingBasketLine } from "react-icons/ri"

const HeaderLeft = () => {
  return (
    <>
      <ul className="header-left">
        <li className="header_icons"><IoSearch size={15} />
        </li>
        <li className="header_icons"><FaRegUser size={15} />
        </li>
        <li className="header_icons">
          <div className="header_budge">0</div>
          <FaRegHeart size={15} />
        </li>
        <li className="header_icons">
          <div className="header_budge">0</div>
          <RiShoppingBasketLine size={15} />
        </li>
      </ul>
    </>
  )
}

export default HeaderLeft