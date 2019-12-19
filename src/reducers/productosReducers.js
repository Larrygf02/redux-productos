import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    COMENZAR_DESCARGA_PRODUCTOS_EXITOSA,
    COMENZAR_DESCARGA_PRODUCTOS_ERROR
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
        default:
            return state;
    }
}