import { 
    COMENZAR_DESCARGA_COMPRAS, 
    COMENZAR_DESCARGA_COMPRAS_EXITOSA,
    COMENZAR_DESCARGA_COMPRAS_ERROR 
} from "../types/comprasTypes";

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
        default:
            return state
    }
}

