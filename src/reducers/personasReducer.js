import {
    COMENZAR_DESCARGA_PERSONAS,
    COMENZAR_DESCARGA_PERSONAS_EXITO,
    COMENZAR_DESCARGA_PERSONAS_ERROR,
    OBTENER_PERSONA_ELIMINAR,
    PERSONA_ELIMINADO_EXITO,
    PERSONA_ELIMINADO_ERROR
} from '../types'
import { AGREGAR_PERSONA, AGREGAR_PERSONA_EXITO, AGREGAR_PERSONA_ERROR } from '../types/personaType'

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
        case OBTENER_PERSONA_ELIMINAR:
            return {
                ...state,
                error: null
            }
        case PERSONA_ELIMINADO_EXITO:
            return {
                ...state,
                error: null,
                personas: state.personas.filter(persona => persona.id !== action.payload)
            }
        case PERSONA_ELIMINADO_ERROR:
            return {
                ...state,
                error: true
            }
        case AGREGAR_PERSONA:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_PERSONA_EXITO:
            return {
                ...state,
                loading: false,
                personas: [...state.personas, action.payload]
            }
        case AGREGAR_PERSONA_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}