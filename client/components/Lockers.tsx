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