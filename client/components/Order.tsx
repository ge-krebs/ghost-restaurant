import { ChangeEvent, FormEvent, useState } from 'react'
import orders from '../../data/orders'
import menu from '../../data/menu'

interface Order {
  id: number
  name: string
  drink_id: number
  complete: boolean
}

function Order() {
  const [newOrder, setNewOrder] = useState({
    id: '',
    name: '',
    drink_id: '',
    complete: '',
  })

  const handleType = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.id, evt.target.value)
    const key = evt.target.id
    const newOrder = {
      id: orders.length + 1,
      [key]: evt.target.value,
      complete: false,
    }
    console.log(newOrder)
  }

  return (
    //label or input on radio buttons is not working correctly, is allowing multiple selections of same radio group
    <>
      <h2>order now</h2>
      <form>
        <label htmlFor="name">your name:</label>
        <input type="text" id="name" onChange={handleType} />
        <div className="order-item-container" onChange={handleType}>
          {/* <label htmlFor="item">Drink</label> */}
          {menu.map((item) => {
            return (
              <div className="item-input" key={item.name}>
                <p>{item.name} $-{item.price}</p>
                <img src={item.image} alt="juice" />
                <label htmlFor="item">
                <input
                  className="item-input"
                  type="radio"
                  id="item"
                  key={item.name}
                  value={item.id}
                />
                </label>
              </div>
            )
          })}
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Order

//loop display all menu items, name, price, image?
//link back to menu to cust to check for ingredients
//on order submit, display the customer order + what locker their food will be in
//link to lockers to collect food
