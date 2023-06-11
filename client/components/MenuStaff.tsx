import { useEffect, useState } from 'react'
import { MenuItem } from '../../models/Menu'
import * as api from '../api/menuApi'

function MenuStaff() {
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
      <h2>Current Menu</h2>
      <div id="menu-table-container">
      <table>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Drink</th>
          <th>Price</th>
          <th>Description</th>
          <th>Display Image</th>
        </tr>
      </thead>
      <tbody>
          {menuItem.map((item) => {
            return (
              <>
              <tr>
              <td key={item.id}>{item.id}</td>
              <td key={item.item}>{item.item}</td>
              <td key={item.price + item.item}>${item.price}</td>
              <td key={item.description}>{item.description}</td>
              <td><img id="small-img"src={item.image} alt="" /></td>
              <td className="staff-table-row">
                <button className="staff-table-btn">edit</button>
              </td>
              </tr>
              </>
            )
          })}
      </tbody>
    </table>
      </div>
    </>
  )
}

export default MenuStaff