import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

// Crear un nuevo Producto
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(nuevoProducto())
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
})