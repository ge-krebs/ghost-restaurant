import { useEffect, useState } from 'react'
import { MenuItem } from '../../models/Menu'
import * as api from '../api/menuApi'

function Menu() {
  const [menuItem, setMenuItems] = useState([] as MenuItem[])

  //T H E   E R R O R   I S   H E R E

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
              <p>{item.item}</p>
              <p>{item.price}</p>
              <img src={item.image} alt="" />
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Menu

//https://www.flaticon.com/search?word=smoothie
