import { useEffect, useState } from 'react'
import { getPickUpOrders } from '../api/orderApi'
import { getAllLockers } from '../api/lockerApi'
import { OrderPickUp } from '../../models/OrderList'
import { Locker } from '../../models/Lockers'

function Lockers() {

  const [ lockers, setLockers ] = useState([])

  useEffect(() => {
    async function getLockerOrders(){
      const data = await getAllLockers()
      setLockers(data)
    }
    getLockerOrders()
  }, [])

  const [ ordersForPickup, setOrdersForPickup ] = useState([] as OrderPickUp[])

  useEffect(() => {
    async function pickUpOrders() {
      const data = await getPickUpOrders()
      setOrdersForPickup(data)
    }
    pickUpOrders()
  })

  const func = () => {
    console.log("i was clicked")
  }
  return (
    <>
      <h2>Collect your juice using the locker # on your order!</h2>
      <div id="locker-container">
        {lockers.map((locker) => {
          {if (locker.order_id === null) {
            return (     
            <div className="locker">     
              <div id="locker-number-container">
                <p>{locker.id}</p>
              </div>
            </div> 
            )
          } else {
            return (
              <div className="locker"> 
              <div id="locker-number-container">
                <p>{locker.id}</p>
                <p>{locker.name}</p>
              </div>
              <div id="collect-drink-container">
                <img className="small-img"src={locker.image} alt="drink photo" />
                <button className="staff-table-btn">Collect</button>
              </div>
              </div>
            )
          }}
        })}
      </div>
    </>
  )
}

export default Lockers

//bring in all tables showing orders, locker id and drink name

          // return (
          //     <div id="locker-number-container">
          //     <p>{locker.id}</p>
          //     <p>{locker.name}</p>
          //     </div>
          //     <div id="collect-drink-container">
          //     <img className="small-img"src={locker.image} alt="drink photo" />
          //     <button className="staff-table-btn">Collect</button>
          //     </div>
          //   </div>
          // )