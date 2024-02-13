import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import './Cart.css'


const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
  return (
    <div>
        {
            carrito.map(prod => <CartItem key={prod.id} {...prod}/>)
        }
        <h3> Total: $ {total}</h3>
        <button className="miBtn" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout" className="miBtn"> Finalizar Compra </Link>

    </div>
  )
}

export default Cart