import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    COMENZAR_DESCARGA_PRODUCTOS_EXITOSA,
    COMENZAR_DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR
} from '../types'

import clienteAxios from '../config/axios'

// Crear un nuevo Producto
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(nuevoProducto());
        // Insertar en la api
        clienteAxios.post('/productos', producto)
            .then(respuesta => {
                console.log(respuesta)
                dispatch( agregarProductoExito(producto))
            })
            .catch(error => {
                console.log(error);
                dispatch( agregarProductoError())
            })
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
})

export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

export const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR
})

//obtener estado de productos
export function obtenerProductosAction() {
    return (dispatch) => {
        dispatch( obtenerProductosComienzo())
        //consultar la api
        clienteAxios.get('/productos')
                .then(respuesta => {
                   dispatch(descargaProductosExitosa(respuesta.data))
                })
                .catch(error => {
                    console.log(error);
                    dispatch(descargaProductosError())
                })
    } 
}

export const obtenerProductosComienzo = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
})

export const descargaProductosExitosa = productos => ({
    type: COMENZAR_DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
})

export const descargaProductosError = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS_ERROR
})

//funcion que elimina un producto especifico

export function borrarProductoAction(id) {
    return (dispatch) => {
        dispatch(obtenerProductoEliminar())
        //eliminar de la api
        clienteAxios.delete(`/productos/${id}`)
                    .then(respuesta => {
                        dispatch(eliminarProductoExito(id))
                    })
                    .catch(error => {
                        dispatch(eliminarProductoError())
                    })
    }
}

export const obtenerProductoEliminar = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR
})

export const eliminarProductoExito = id => ({
    type: PRODUCTO_ELIMINADO_EXITO,
    payload: id
})

export const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
})

//
export function obtenerProductoEditarAction(id) {
    return (dispatch) => {
        dispatch(obtenerProductoAction())
    }
}

export const obtenerProductoAction = () => ({
    type: OBTENER_PRODUCTO_EDITAR
})