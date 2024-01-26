const productos = [
    {id: "1", nombre: "Aromatizante en aerosol Te verde", precio: 3000, img: '../img/TE-VERDE_AERO.jpg', idCat: "1", stock: 100},
    {id: "2", nombre: "Aromatizante textil Bubble", precio: 2100, img: "..//img/BUBBLE_TXT.jpg", idCat: "2", stock: 100},
    {id: "3", nombre: "Aromatizante difusor Coni", precio: 2800, img: "../img/DIFUSOR_CONI.jpg", idCat: "3", stock: 100},
    {id: "4", nombre: "Aromatizante pequeños espacios Acqua", precio: 1200, img: "../img/ACQUA_HYA.jpg", idCat: "4", stock: 100},
    {id: "5", nombre: "Aromatizante en aerosol Coco-Vainilla", precio: 3000, img: '../img/COCO-VAINILLA_AERO.webp', idCat: "1", stock: 100},
    {id: "6", nombre: "Aromatizante en aerosol Limon", precio: 3000, img: '../img/LIMON_AERO.webp', idCat: "1", stock: 100},
    {id: "7", nombre: "Aromatizante en aerosol Citrus", precio: 3000, img: '../img/CITRUS_AERO.jpg', idCat: "1", stock: 100},
    {id: "8", nombre: "Aromatizante en aerosol Jazmin", precio: 3000, img: '../img/JAZMIN_AERO.webp', idCat: "1", stock: 100},
    {id: "9", nombre: "Aromatizante textil Jazmin", precio: 2100, img: "..//img/JAZMIN_TXT.jpg", idCat: "2", stock: 100},
    {id: "10", nombre: "Aromatizante textil Uva", precio: 2100, img: "../img/UVA_TXT.jpg", idCat: "2", stock: 100},
    {id: "11", nombre: "Aromatizante textil Ricci", precio: 2100, img: "../img/RICCI_TXT.jpg", idCat: "2", stock: 100},
    {id: "12", nombre: "Aromatizante textil Million", precio: 2100, img: "../img/MILLION_TXT.jpg", idCat: "2", stock: 100},
    {id: "13", nombre: "Aromatizante difusor Venus", precio: 2800, img: "../img/VENUS_NEW.jpg", idCat: "3", stock: 100},
    {id: "14", nombre: "Aromatizante difusor Patio", precio: 2800, img: "../img/DIFUSOR_PATIO.jpg", idCat: "3", stock: 100},
    {id: "15", nombre: "Aromatizante difusor Pitanga", precio:"$2800", img: "../img/DIFUSOR_PITANGA.jpg", idCat: "3", stock: 100},
    {id: "16", nombre: "Aromatizante difusor Flores Blancas", precio: 2800, img: "../img/FLORES-BLANCAS_DIFUSOR.jpg", idCat: "3", stock: 100},
    {id: "17", nombre: "Aromatizante pequeños espacios Lemon", precio: 1200, img: "../img/LEMON_HYA.jpg", idCat: "4", stock: 100},
    {id: "18", nombre: "Aromatizante pequeños espacios Lavanda", precio: 1200, img: "../img/LAVANDA_HYA.webp", idCat: "4", stock: 100},
    {id: "19", nombre: "Aromatizante pequeños espacios Naranja Pimienta", precio: 1200, img: "../img/NARANJA-PIMIENTA_HYA.jpg", idCat: "4", stock: 100},
    {id: "20", nombre: "Aromatizante pequeños espacios Pino", precio: 1200, img: "../img/PINO_HYA.jpg", idCat: "4", stock: 100},
    {id: "21", nombre: "Dispenser aromatizador", precio: 5000, img: "../img/DISP_AROMASS.jpg", idCat: "5", stock: 100},
    
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
        }, 2000)
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