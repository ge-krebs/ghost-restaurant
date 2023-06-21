import { useEffect, useState } from 'react'
import { getAllLockers } from '../api/lockerApi'

function Lockers() {

  const [ lockers, setLockers ] = useState([])

  useEffect(() => {
    async function getLockerOrders(){
      const data = await getAllLockers()
      setLockers(data)
    }
    getLockerOrders()
  }, [])

  const pickUpOrder = (id: number) => {
    //mark the order as completed
    //remove the locker number from the order
    //mark the locker as unfilled
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
                <img className="small-img"src={locker.image} alt="chosen menu item" />
                {/* <button className="staff-table-btn" onClick={pickUpOrder(locker.order_id)}>Collect</button> */}
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

  //--IN PROGRESS FEATURE--//

  // const [ ordersForPickup, setOrdersForPickup ] = useState([] as OrderPickUp[])

  // useEffect(() => {
  //   async function pickUpOrders() {
  //     const data = await getPickUpOrders()
  //     setOrdersForPickup(data)
  //   }
  //   pickUpOrders()
  // })