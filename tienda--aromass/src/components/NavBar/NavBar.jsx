import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/logo_aromas_new.jpg" alt="Logo aromass" />
      </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to="/">
                    Home
                  </NavLink>
                </li>
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
                
                
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar