import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, stock, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h6> {nombre} </h6>
        <p>ID: {id} </p>
        <p>Stock: {stock} </p>
        <p>Precio: {precio} </p>
        <Link className='miBtn' to={`/item/${id}`}> Ver Detalle </Link>
        {/* <button> Ver Detalle </button> */}
    </div>
  )
}

export default Item