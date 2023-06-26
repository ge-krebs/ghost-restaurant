import { useEffect, useState } from 'react'
import { MenuItem } from '../../models/Menu'
import * as api from '../api/menuApi'

function Menu() {
  const [menuItem, setMenuItems] = useState([] as MenuItem[])

  useEffect(() => {
    async function loadMenuItems() {
      const data = await api.getMenuItems()
      setMenuItems(data)
    }
    loadMenuItems()
  }, [])

  return (
    <>
      <h2>our menu</h2>
      <div id="menu-container">
        {menuItem.map((item) => {
          return (
            <div className="item-container" key={item.item}>
              <h3>{item.item}</h3>
              <p id="price">${item.price}</p>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Menu
