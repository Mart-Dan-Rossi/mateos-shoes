import { createContext, useState } from "react";

export const Contexto = createContext()

const { Provider } = Contexto;

const MyProvider = ({ children }) => {
    let carritoEnLocalStorage = localStorage.getItem("carrito")
    const [cart, setCart] = useState(carritoEnLocalStorage == null ? [] : JSON.parse(carritoEnLocalStorage))
    
    const setCarritoYLocalStorage = (arrayProductos)=> {
        setCart(arrayProductos)
        window.localStorage.setItem("carrito", JSON.stringify(arrayProductos))
    }

    const isInCart = (id)=> {
        //Método Some es un método de array que devuelve un boolean
        return cart.some(productoEnCarrito => productoEnCarrito.id == id)
    }

    const agregarItem = (item, cantidadEnElCarrito)=> {
        //Le agrego una nueva propiedad al item
        const newItem = {
            ...item,
            cantidadEnElCarrito
        }

        if(isInCart(newItem.id)){
            //Busco el producto en el estado por su id
            const productoAgregadoEnItemArray = cart.find(producto => producto.id == newItem.id)
            //Obtengo el índice del producto en el array
            const indexProducto = cart.indexOf(productoAgregadoEnItemArray)
            //Copio el estado cart para poder modificarlo
            const arrayProductosAux = [...cart]

            //Modifico la cantidad de ESE item
            arrayProductosAux[indexProducto].cantidadEnElCarrito += cantidadEnElCarrito
            
            //Actualizo el estado cart con la cantidad actualizada del producto
            setCarritoYLocalStorage(arrayProductosAux)
        } else {
            //Si no estaba en el carrito agrego el nuevo item al cart reteniendo la info previa
            setCarritoYLocalStorage([...cart, newItem])
        }
    }

    const vaciarCarrito = ()=> {
        return setCarritoYLocalStorage([])
    }

    const borrarItem = (id)=> {
        return setCarritoYLocalStorage(cart.filter(producto => producto.id != id))
    }

    const cantidadProductosEnCarrito = ()=> {
        return cart != [] ? cart.reduce((acc, producto)=> acc += producto.cantidadEnElCarrito, 0) : 0
    }

    const cantidadEsteProductoEnCarrito = (nombreProducto)=> {
        let esteProducto = cart.find(nft => {return nft.nombre === nombreProducto})
        return esteProducto ? esteProducto.cantidadEnElCarrito : 0
    }
    
    const obtenerPrecioTotal = ()=> {
        return cart.reduce((acc, producto)=> acc += producto.cantidadEnElCarrito * producto.precio, 0)
    }

    const obtenerPrecioPorEsteProducto = (nombreProducto)=> {
        let esteProducto = cart.find(nft => {return nft.nombre === nombreProducto})
        return esteProducto.precio * esteProducto.cantidadEnElCarrito
    }


    return <Provider value={{ cart, isInCart, agregarItem, vaciarCarrito, borrarItem, cantidadProductosEnCarrito, cantidadEsteProductoEnCarrito, obtenerPrecioTotal, obtenerPrecioPorEsteProducto }}>{ children }</Provider>
}

export default MyProvider