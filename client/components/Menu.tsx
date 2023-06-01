import menu from '../../data/menu'

function Menu() {
  return (
    <>
      <h2>our menu</h2>
      <div id="menu-container">
        {menu.map((item) => {
          return (
            <div className="item-container" key={item.name}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.ingredients}</p>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Menu

//https://www.flaticon.com/search?word=smoothie
