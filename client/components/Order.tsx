import { ChangeEvent, FormEvent, useState } from 'react'
import orders from '../../data/orders'
import menu from '../../data/menu'

interface Props {
  name: string
  item: string
}

function Order() {
  const randomLocker = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const [allOrders, setOrders] = useState([{}])

  const [newOrder, setNewOrder] = useState<Props[]>([])

  const handleType = (evt: ChangeEvent<HTMLInputElement>) => {
    const key = evt.target.id
    const newState = {
      ...allOrders,
      [key]: evt.target.value,
    }
    setNewOrder(newState)
    console.log(newOrder)
  }

  const placeOrder = (evt: FormEvent) => {
    evt.preventDefault()
    setOrders([...allOrders, newOrder])
    console.log(allOrders)
  }

  return (
    //label or input on radio buttons is not working correctly, is allowing multiple selections of same radio group
    <>
      <h2>order now</h2>
      <div id="form-container">
        <form onSubmit={placeOrder}>
          <div id="form-name-container">
            <label htmlFor="name">your name:</label>
            <input type="text" id="name" onChange={handleType} />
          </div>
          <div className="order-item-container">
            {menu.map((item) => {
              return (
                <div className="item-input" key={item.name}>
                  <label htmlFor="item"></label>
                  <input
                    className="item-input"
                    type="radio"
                    id="drink_id"
                    key={item.name}
                    value={item.id.toString()}
                    onChange={handleType}
                  />
                  <p>
                    {item.name} ${item.price}
                  </p>
                  <img src={item.image} alt="juice" />
                </div>
              )
            })}
          </div>
          <button>Submit</button>
        </form>
      </div>
      {/* display orders hopefully */}
      <div>
        <ul>
          {allOrders.map((order) => (
            <li key={order.name}>{order.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Order

//loop display all menu items, name, price, image?
//link back to menu to cust to check for ingredients
//on order submit, display the customer order + what locker their food will be in
//link to lockers to collect food
