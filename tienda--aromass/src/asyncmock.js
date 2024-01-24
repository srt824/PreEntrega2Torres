const productos = [
    {id: "1", nombre: "Aromatizante en aerosol Te verde", precio: 1000, img: "https://www.aromassweb.com.ar/wp-content/uploads/2017/09/TE-VERDE_AERO.jpg", idCat: "1"},
    {id: "2", nombre: "Aromatizante textil Bubble", precio: 1300, img: "https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000018000/18855.jpg", idCat: "2"},
    {id: "3", nombre: "Aromatizante difusor Coni", precio: 800, img: "https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000018000/18870.jpg", idCat: "3"},
    {id: "4", nombre: "Aromatizante pequeños espacios Acqua", precio: 500, img: "https://universoaromas.com/wp/wp-content/uploads/2019/11/HYA-Acqua.jpg", idCat: "4"},
]

 export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 2000)
    })
}

//Funcion similar pero que ahora retorna un sólo item

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//creamos una fn que retorne toda la categoría.

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}