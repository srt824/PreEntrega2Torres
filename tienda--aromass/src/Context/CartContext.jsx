 
//1) Importo el hook useState y createContext, que me permite crear un contexto que almacenará,
//toda la lógica del carro de compras.

import { useState, createContext } from "react"

//2) Creamos el nuevo contexto.
//Le podemos dar como valor inicial, un objeto con las sig. propiedades:

export const CartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//3) Creamos un componente llamado "CartProvider"
//también lo pueden encontrar en la teoría como "Proveedor de Contextos"

export const CartProvider = ({children}) => {
    //Usamos useState para generar algunos estados para almacenar el carrito, el total y la cantidadTotal.
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Metemos console.log de forma momentanea para ver que se actualice todo correctamente.
    console.log(carrito)
    console.log("Monto total de la compra: ", total);
    console.log("Cantidad de items: ", cantidadTotal);

    //4) agregamos algunos métodos al proveedor de contexto (cartProvider) para manipular el carrito de compras:

    //Función agregar producto al carrito:

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
            /*La sintaxis: prev => [...prev, {item, cantidad}] se utiliza para crear 
            un nuevo array a partir del estado anterior del carrito (prev) y agregar
            un nuevo objeto, que representa el nuevo producto.*/
        }else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                }else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
        }



    }

    //funcion para eliminar productos del carrito:

    const eliminarProducto = (id) => {
        //me guardo una referencia del producto que vamos a borrar:
        const productoEliminado = carrito.find(prod => prod.item.id === id);

        //ahora lo elimino del carrito:
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    //Funcion para vaciar el carrito de compras:
    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setCantidadTotal(0);
    }

    //5)Usamos el value para enviar el valor del carrito, total, cantidadTotal y las funciones:

    return (
        <CartContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito,
        eliminarProducto, vaciarCarrito}}> {children} </CartContext.Provider>
    )

    //Le tenemos que agregar el children, que es una propiedad especial que utilizamos para representar
    //a todos esos componentes que puedan necesitar sus funciones o métodos.
}
