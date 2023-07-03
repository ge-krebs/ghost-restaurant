import { useEffect, useState } from 'react'
import { getAllLockers } from '../api/lockerApi'

function Lockers() {
  const [lockers, setLockers] = useState([])

  useEffect(() => {
    async function getLockerOrders() {
      const data = await getAllLockers()
      setLockers(data)
    }
    getLockerOrders()
  }, [])

  return (
    <>
      <h2>Collect your juice using the locker # on your order!</h2>
      <div id="locker-container">
        {lockers.map((locker, i) => {
          {
            if (locker.order_id === null) {
              return (
                <div key={locker + i + 'unfilled'} className="locker">
                  <div
                    key={locker.id + 'number container'}
                    id="locker-number-container"
                  >
                    <p>{locker.id}</p>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={locker + i + 'filled'} className="locker">
                  <div id="locker-number-container">
                    <p>{locker.id}</p>
                    <p>{locker.name}</p>
                  </div>
                  <div id="collect-drink-container">
                    <img
                      className="small-img"
                      src={locker.image}
                      alt="chosen menu item"
                    />
                  </div>
                </div>
              )
            }
          }
        })}
      </div>
    </>
  )
}

export default Lockers
