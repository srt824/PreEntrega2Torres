import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1><em>Aromass Air Breeze</em></h1>

        <nav>
            <ul>
                <li>Aerosoles</li>
                <li>Textiles</li>
                <li>Difusores</li>
                <li>Hogar y Auto</li>
                <li>Dispensers</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar