import lockers from '../../data/lockers'

function Locker() {

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
              {locker.id}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Locker
