import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { MenuItem } from '../../models/Menu'
import * as api from '../api/menuApi'

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

  //random locker function for order
  // const randomLocker = (min: number, max: number) => {
  //   min = Math.ceil(min)
  //   max = Math.floor(max)
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  const [nameInput, setNameInput] = useState('')
  const [drinkInput, setDrinkInput] = useState('')

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value)
  }

  const handleDrinkInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDrinkInput(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(nameInput) //logs name input
    console.log(drinkInput) //logs drink input (change to id not name)
    //create function to parse these into orders obj or db
    //use create randomlocker to send order to locker number
  }
  return (
    // A   P R O B L E M //
    //label or input on radio buttons is not working correctly, is allowing multiple selections of same radio group
    <>
      <h2>order now</h2>
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <div id="form-name-container">
            <label htmlFor="name">your name:</label>
            <input type="text" id="name" onChange={handleNameInput} />
          </div>
          <div className="order-item-container">
            {menuItem.map((item) => {
              return (
                <div className="item-input" key={item.item}>
                  <label htmlFor="item"></label>
                  <input
                    className="item-input"
                    type="radio"
                    id="drink_id"
                    key={item.item}
                    value={item.id} //can use item.id here to gather the drinks id to add to orders list in future
                    onChange={handleDrinkInput}
                  />
                  <p>
                    {item.item} ${item.price}
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
      {/* <div>
        <ul>
          {allOrders.map((order) => (
            <>
              <p>Thanks {order.name}!</p>
              <p>Your order will be available for pick up in locker #</p>
              <p>{order.item} (orderitem)</p>
            </>
          ))}
        </ul>
      </div> */}
    </>
  )
}

export default Order

//loop display all menu items, name, price, image?
//link back to menu to cust to check for ingredients
//on order submit, display the customer order + what locker their food will be in
//link to lockers to collect food

//garbage

// const [allOrders, setOrders] = useState([{}])

// const [newOrder, setNewOrder] = useState({
//   name: '',
//   item: '',
// })

// const handleType = (evt: ChangeEvent<HTMLInputElement>) => {
//   const key = evt.target.id
//   const newState = {
//     ...allOrders,
//     [key]: evt.target.value,
//   }
//   console.log(newState)
//   console.log(newOrder)
// }

// const placeOrder = (evt: FormEvent) => {
//   evt.preventDefault()
//   setOrders([...allOrders, newOrder])
//   console.log(allOrders)
// }

// const [selectDrink, setSelectedDrink] = useState<string>()

// const radioHandler = (evt: ChangeEvent<HTMLInputElement>) => {
//   evt.preventDefault()
//   setSelectedDrink(evt.target.value)
// }
