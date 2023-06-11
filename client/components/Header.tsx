import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
      <div id="header-container">
        <div id="header-title-container">
          <h1>ghost juice</h1>
        </div>
        <nav>
          <div id="nav-container">
            <ul>
              <Link key="homeBtn" to="/">
                <button>home</button>
              </Link>
              <Link key="staffBtn" to="/orders">
                <button>staff</button>
              </Link>
              <Link key="lockerBtn" to="/lockers">
                <button>lockers</button>
              </Link>
              <Link key="orderBtn" to="/order">
                <button id="order-now-btn">order now</button>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
