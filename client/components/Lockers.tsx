import { useEffect, useState } from 'react'
import { getPickUpOrders } from '../api/orderApi'
import { getAllLockers } from '../api/lockerApi'
import { OrderPickUp } from '../../models/OrderList'
import { Locker } from '../../models/Lockers'

function Lockers() {

  const [ lockers, setLockers ] = useState([] as Locker[])

  useEffect(() => {
    async function getLockerOrders(){
      const data = await getAllLockers()
      setLockers(data)
    }
    getLockerOrders()
    console.log(lockers)
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
          return (
            <div key={locker.id} className="locker" onClick={func}>
              {/* {if(locker.order_id < 0){
                
              }else{
                
              }} */}
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Lockers

//bring in all tables showing orders, locker id and drink name