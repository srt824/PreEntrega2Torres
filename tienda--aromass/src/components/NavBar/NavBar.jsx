import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1><em>Aromass Air Breeze</em></h1>
      </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/1">
                    Aerosoles
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/2">
                    Textiles
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/3">
                    Difusores
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/4">
                    Hogar y Auto
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/5">
                    Dispensers
                  </NavLink>
                </li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar