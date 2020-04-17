import {
    COMENZAR_DESCARGA_PERSONAS,
    COMENZAR_DESCARGA_PERSONAS_EXITO,
    COMENZAR_DESCARGA_PERSONAS_ERROR
} from '../types'

const initialState = {
    personas: [],
    error: null,
    loading: false,
    persona: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case COMENZAR_DESCARGA_PERSONAS:
            return {
                ...state,
                loading: true,
                persona: {}
            }
        case COMENZAR_DESCARGA_PERSONAS_EXITO:
            return {
                ...state,
                personas: action.payload,
                loading: false,
                error: false,
                persona: {}
            }
        case COMENZAR_DESCARGA_PERSONAS_ERROR:
            return {
                ...state,
                personas: [],
                error: true,
                persona: {}
            }
        default:
            return state;
    }
}