"use client"
import { menuItems } from "@/app/constants/menuItems"
import { useRouter } from "next/navigation"

const HeaderNavbar = () => {
  const navigate = useRouter()
  return (
    <div>
      <ul className="header-navbar">
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => navigate.push(item.link)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderNavbar