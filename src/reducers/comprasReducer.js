import { 
    COMENZAR_DESCARGA_COMPRAS, 
    COMENZAR_DESCARGA_COMPRAS_EXITOSA,
    COMENZAR_DESCARGA_COMPRAS_ERROR,
    AGREGAR_COMPRA,
    AGREGAR_COMPRA_EXITO,
    AGREGAR_COMPRA_ERROR
} from "../types/comprasTypes";
import { AGREGAR_PERSONA_EXITO } from "../types/personaType";

const initialState = {
    compras: [],
    error: null,
    loading: false,
    compra: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case COMENZAR_DESCARGA_COMPRAS:
            return {
                ...state,
                loading: true,
                compra: {}
            }
        case COMENZAR_DESCARGA_COMPRAS_EXITOSA:
            return {
                ...state,
                loading: false,
                compras: action.payload
            }
        case COMENZAR_DESCARGA_COMPRAS_ERROR:
            return {
                ...state,
                loading: false,
                error: false,
            }
        case AGREGAR_COMPRA:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_COMPRA_EXITO:
            return {
                ...state,
                loading: false,
                compras: [...state.compras, action.payload]
            }
        case AGREGAR_COMPRA_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}

