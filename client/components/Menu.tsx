import menu from '../../data/menu'

import { useEffect, useState } from 'react'
import { MenuItem } from '../../models/Menu'
import * as api from '../api/menuApi'

//api.getMenuItems

function Menu() {
  const [menuItem, setMenuItems] = useState([] as MenuItem[])

  useEffect(() => {
    async function loadMenuItems() {
      const data = await api.getMenuItems()
      setMenuItems(data)
    }
    loadMenuItems()
    console.log(menuItem)
  })

  return (
    <>
      <h2>our menu</h2>
      <div id="menu-container">
        {menu.map((item) => {
          return (
            <div className="item-container" key={item.name}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.ingredients}</p>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Menu

//https://www.flaticon.com/search?word=smoothie
