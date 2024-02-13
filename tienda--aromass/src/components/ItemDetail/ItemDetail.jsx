
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

//Importamos el CartContext:
import { CartContext } from '../../Context/CartContext';
//Importo el Hook useContext
import { useContext } from 'react';


const ItemDetail = ({id, nombre, stock, precio, img}) => {
  //Creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  ///// clase 11 - Context

  const { agregarAlCarrito } = useContext(CartContext);

  /////////////////////////////////////////////////////////////
  //Creamos una funcion manejadora de la cantidad.

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora voy a crear un objeto con el item y la cantidad
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <p>ID de producto: {id} </p>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <p>Stock: {stock} </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eos reiciendis adipisci dolor eligendi, illo, blanditiis dicta nihil iure, ex recusandae voluptatibus quisquam minima odit facere ipsum enim! Omnis, maxime!</p>
      <img src={img} alt={nombre} />

      {
      // Acá aplicamos la logica de montaje y desmontaje del contador
      }

      {
        agregarCantidad > 0 ? (<Link to="/cart" className='miBtn'> Terminar Compra </Link>) : (<ItemCount
        inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad}/>)
      }


    </div>
  )
}

export default ItemDetail