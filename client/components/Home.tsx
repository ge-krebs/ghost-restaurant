import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import * as action from '../actions/menu'
import { MenuItem } from '../../models/Menu'

function Menu() {
  const dispatch = useAppDispatch()
  const menuArr = useAppSelector((state) => state.menu) as MenuItem[]

  useEffect(() => {
    dispatch(action.getMenuItems())
  }, [dispatch])

  return (
    <>
      <h2>our menu</h2>
      <div id="menu-container">
        {menuArr.map((item) => {
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

//https://www.flaticon.com/search?word=smoothie
