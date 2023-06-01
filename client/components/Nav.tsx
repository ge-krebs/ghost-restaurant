import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
    <ul>
      <Link className="test" key="homeBtn" to="/">
        <button>home</button>
      </Link>
      <Link className="test" key="menuBtn" to="/menu">
        <button>menu</button>
      </Link>

      <Link className="test" key="orderBtn" to="/order">
        <button>order</button>
      </Link>

      <Link className="test" key="lockerBtn" to="/lockers">
        <button>lockers</button>
      </Link>
    </ul>
    </nav>
  )
}

export default Nav
