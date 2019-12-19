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

const initialState = {
    productos: [],
    error: null,
    loading: false
}


export default function(state=initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                error: null
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: null,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: true
            }
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true
            }
        case COMENZAR_DESCARGA_PRODUCTOS_EXITOSA:
            return {
                ...state,
                productos: action.payload,
                loading: false,
                error: false
            }
        case COMENZAR_DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                productos: [],
                error: true
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                error: null
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                error: null,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                error: true
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                error: null
            }
        case PRODUCTO_EDITAR_EXITO:
            return {
                ...state,
                error: null,
                producto: action.payload
            }
        case PRODUCTO_EDITAR_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}