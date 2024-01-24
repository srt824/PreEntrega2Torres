import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <p>ID: {id} </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eos reiciendis adipisci dolor eligendi, illo, blanditiis dicta nihil iure, ex recusandae voluptatibus quisquam minima odit facere ipsum enim! Omnis, maxime!</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail