import { useContext } from 'react';
import {CartContext} from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext);
  return (
    <div>
        <Link to="/cart">
          <img className='imgCart' src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" alt="Cart" />
          {
            cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
          }
        </Link>
    </div>
  )
}

export default CartWidget