//version sin descuento de stock

/* import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

const Checkout = () => {
    const {carrito, vaciarCarrito, total} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("")
    const [error, setError] = useState("");

    //Funcion manejadora del form:

    const manejadorSubmit = (event) => {
        event.preventDefault();

        //Verificamos que todos los campos se completen:
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, completá todos los campos...")
            return;
        }

        //Validamos que el email coincida:
        if(email !== emailConfirmacion) {
            setError("¡Los emails no coinciden!")
            return;
        }

        //Creamos un obj con todos los datos de la orden:
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //Guardamos la orden de compra en la bd:
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                //Limpiar campos del form
                setNombre("");
                setApellido("");
                setTelefono("");
                setEmail("");
                setEmailConfirmacion("");
                //Mostrar el ID de la orden con un alerta:
                Swal.fire({
                    title: "¡Su orden ha sido generada!",
                    text: `Su número de orden es: ${docRef.id}`,
                    icon: "success",

                })
            })
            .catch(error => {
                console.log("Error al crear la orden de compra", error);
                setError("No se pudo crear la orden");
            })
    }

  return (
    <div>
        <h2>Checkout - Finalizar Compra</h2>

        <form onSubmit={manejadorSubmit}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} X {producto.cantidad} </p>
                        <p> {producto.item.precio} </p>
                        <hr />
                    </div>
                ))
            }

            <div>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="apellido"> Apellido </label>
                <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="telefono"> Teléfono </label>
                <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="email"> E-mail </label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="emailconf"> E-mail confirmación </label>
                <input type="email" id="emailconf"onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>

            {
                error && <p style={{color: "red"}}> {error} </p>
            }

            <button> Finalizar Orden </button>

            {
                ordenId && <strong> ¡Gracias por su compra! Tu número de orden es: {ordenId} </strong>
            }

        </form>
    </div>
  )
} 

export default Checkout */ 

//Version con descuento de stock


import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2'
import './Checkout.css';

const Checkout = () => {
    const {carrito, vaciarCarrito, total} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("")
    const [error, setError] = useState("");

    //Funcion manejadora del form:

    const manejadorSubmit = (event) => {
        event.preventDefault();

        //Verificamos que todos los campos se completen:
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, completá todos los campos...")
            return;
        }

        //Validamos que el email coincida:
        if(email !== emailConfirmacion) {
            setError("¡Los emails no coinciden!")
            return;
        }

        //Creamos un obj con todos los datos de la orden:
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //Modificación para que descuente stock: ejecutar varias promesas en paralelo. Por un lado puedo crear la orden
        //de compra y por el otro actualizar el stock:

        Promise.all(
            orden.items.map(async(productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await(getDoc(productoRef));
                const stockActual = productoDoc.data().stock;
                //data() me permite obtener los datos del documento.

                await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad});
                //Modifico el stock y subo la actualización.

                
            })
        )

        //Guardamos en la base de datos la orden de compra.
        .then(() => {
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                    //Acá podemos limpiar los inputs y usar sweet alert 2 para mostrar el Order ID.
                })
                .catch(error => console.log("Error al generar la orden", error))
        })
        .catch(error => {
            console.log("No pudimos actualizar el stock", error);
            setError("Error al actualizar el stock");
        })
    }

  return (
    <div>
        <h2>Checkout - Finalizar Compra</h2>

        <form onSubmit={manejadorSubmit}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} X {producto.cantidad} </p>
                        <p> {producto.item.precio} </p>
                        <hr />
                    </div>
                ))
            }

            <div>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="apellido"> Apellido </label>
                <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="telefono"> Teléfono </label>
                <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="email"> E-mail </label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="emailconf"> E-mail confirmación </label>
                <input type="email" id="emailconf"onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>

            {
                error && <p style={{color: "red"}}> {error} </p>
            }

            <div className="botones"></div>
                <button className="btnCheckout" disabled={carrito.length === 0}> Finalizar Orden</button>
                <button className="btnCheckout" type="reset"> Borrar </button>

            {
                ordenId && <strong> ¡Gracias por su compra! Su número de orden es: {ordenId} </strong>
            }

        </form>
    </div>
  )
}

export default Checkout