import { useEffect } from 'react'
import { MenuItem } from '../../models/Menu'
import * as action from '../actions/menu'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

function MenuStaff() {
  const dispatch = useAppDispatch()
  const menuArr = useAppSelector((state) => state.menu) as MenuItem[]

  useEffect(() => {
    dispatch(action.getMenuItems())
  }, [dispatch])

  const handleDelete = (id: number) => {
    dispatch(action.delMenuItem(id))
  }

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
            {menuArr.map((item) => {
              return (
                <>
                  <tr>
                    <td key={item.id}>{item.id}</td>
                    <td key={item.item}>{item.item}</td>
                    <td key={item.price + item.item}>${item.price}</td>
                    <td key={item.description}>{item.description}</td>
                    <td>
                      <img className="small-img" src={item.image} alt="" />
                    </td>
                    <td className="staff-table-row">
                      <button
                        className="staff-table-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        delete
                      </button>
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
