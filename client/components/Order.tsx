import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { MenuItem } from '../../models/Menu'
import * as api from '../api/menuApi'
import { addOrder } from '../api/orderApi'
import { fillLocker, getUnfilledLockers } from '../api/lockerApi'

import { OrderList, NewOrder } from '../../models/OrderList'

function Order() {
  //get menu items for form//
  const [menuItem, setMenuItems] = useState([] as MenuItem[])

  useEffect(() => {
    async function loadMenuItems() {
      const data = await api.getMenuItems()
      setMenuItems(data)
    }
    loadMenuItems()
  }, [])

  //gets unfilled lockers and stores them in a state
  const [unfilledLockers, setUnfilledLockers] = useState([])

  //needs a catch incase no lockers left
  useEffect(() => {
    async function loadUnfilledLockers(){
      const data = await getUnfilledLockers()
      const arr = []
      data.map((x) => { arr.push(x.id)})
      setUnfilledLockers(arr)
    }
    loadUnfilledLockers()
  }, [])

  //generates random locker # from empty lockers
  function randomLocker(list: number[]){
    const randomIndex = Math.floor(Math.random() * list.length)
    const randomLocker = list[randomIndex]
    return randomLocker
  }

  const [newOrder, setNewOrder] = useState<NewOrder>({
    name: '',
    item_id: 0,
    locker_id: randomLocker(unfilledLockers),
    complete: false
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewOrder({...newOrder, [e.target.name]: e.target.value})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    markLockerFilled(newOrder.locker_id)
    return addOrder(newOrder) //submits order to api to carry to backend
  }

  //marks locker as filled on order submission
  async function markLockerFilled(id: number) {
    await fillLocker(id)
  }

  return (
    // A   P R O B L E M //
    //label or input on radio buttons is not working correctly, is allowing multiple selections of same radio group
    <>
      <h2>order now</h2>
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <div id="form-name-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={handleInput} />
          </div>
          <div id="juice-choice-container">
            <label htmlFor="item" id="drink_id"><h3>choose your juice</h3></label>
            <div className="order-item-container">
              {menuItem.map((item) => {
                return (
                  <div className="item-input" key={item.item}>
                    <input
                      className="item-input"
                      type="checkbox"
                      id="drink_id"
                      name="item_id"
                      key={item.item}
                      value={item.id} //can use item.id here to gather the drinks id to add to orders list in future
                      onChange={handleInput}
                    />
                    <p>
                      {item.item} ${item.price}
                    </p>
                    <img src={item.image} alt="juice" />
                  </div>
                )
              })}
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Order

//loop display all menu items, name, price, image?
//on order submit, display the customer order + what locker their food will be in
//link to lockers to collect food